import { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import axios from 'axios'

import { Conteudo, ConteudoMatch, TeamContainer, ContainerMatch, MatchContainer, X, MatchCont } from '../../styles/theme';

export function Match() {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3004/match`).then((res: any) => {
            const sortedMatches = res.data.sort((a: any, b: any) => {
                const dateA = parseISO(a.date);
                const dateB = parseISO(b.date);

                return dateA.getTime() - dateB.getTime();
            });

            const formattedMatches = sortedMatches.map((match: any) => ({
                ...match,
                date: format(parseISO(match.date), 'dd/MM/yyyy'),
            }));

            setMatches(formattedMatches);
        })
    })

    return (
        <TeamContainer>
            <MatchContainer>
                {matches.map((match: any) => (
                    <ContainerMatch key={match.id}>
                        <MatchCont>
                            <ConteudoMatch>{`${match.host.name}`}</ConteudoMatch>
                            <X>X</X>
                            <ConteudoMatch>{`${match.visitor.name}`}</ConteudoMatch>
                        </MatchCont>
                        <ConteudoMatch>{match.date}</ConteudoMatch>
                    </ContainerMatch>
                ))}
            </MatchContainer>
        </TeamContainer>
    )
}