import { createContext, useEffect, useState } from "react";
import { ITeam, IMatch, ContextProps, ThemeProps } from "../types";
import Team from "../services/Team";
import Match from "../services/Match";
import { Dark } from "../styles/theme";
import { ThemeProvider } from "styled-components";

const Contexto = createContext({} as ContextProps);

function Provider({ children }: any) {
    const [team, setTeam] = useState<ITeam | undefined>();
    const [teams, setTeams] = useState([] as ITeam[]);
    const [filteredTeams, setFilteredTeams] = useState([] as ITeam[]);
    const [matches, setMatches] = useState([] as IMatch[]);
    const [theme, setTheme] = useState<ThemeProps>(Dark);

    useEffect(() => {
        (async () => {
            const teamReq: ITeam[] = await Team.getTeams();
            setTeams(teamReq);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            if (team !== undefined) {
                const matchReq: IMatch[] = await Match.getMatchesByTeam(team.id);
                setMatches(matchReq);
            } else {
                const matchReq: IMatch[] = await Match.getMatches();
                setMatches(matchReq);
            }
        })();
    }, [team]);

    return (
        <ThemeProvider theme={theme}>
            <Contexto.Provider
                value={{ team, teams, matches, theme, setTeam, setTheme, filteredTeams, setFilteredTeams }}
            >
                {children}
            </Contexto.Provider>
        </ThemeProvider>
    );
}

export { Contexto, Provider };