import { useCallback, useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';
import axios from 'axios'

import { ConteudoMatch, TeamContainer, ContainerMatch, MatchContainer, X, MatchCont } from '../../styles/theme';

import { IMatch, LeftProps } from '../../types';
import { useContexto } from '../../hooks';

export function Match() {
    const { matches } = useContexto()

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