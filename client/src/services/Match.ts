import { format, parseISO } from "date-fns";
import { IMatch } from "../types/index";
import api from "./api";

class Matches {
    async getMatches(): Promise<IMatch[]> {
        const res = await api.get("match");

        const sortedMatches = res.data.sort((a: any, b: any) => {
            const dateA = parseISO(a.date);
            const dateB = parseISO(b.date);
            return dateA.getTime() - dateB.getTime();
        });

        const formattedMatches = sortedMatches.map((match: any) => ({
            ...match,
            date: format(parseISO(match.date), "dd/MM/yyyy"),
        }));

        return formattedMatches;
    }

    async getMatchesByTeam(team_id: number): Promise<IMatch[]> {
        const res = await api.get(`match/${team_id}`);

        const sortedMatches = res.data.sort((a: any, b: any) => {
            const dateA = parseISO(a.date);
            const dateB = parseISO(b.date);
            return dateA.getTime() - dateB.getTime();
        });

        const formattedMatches = sortedMatches.map((match: any) => ({
            ...match,
            date: format(parseISO(match.date), "dd/MM/yyyy"),
        }));

        return formattedMatches;
    }
}

const matches = new Matches();

export default matches;