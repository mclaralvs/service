import { useEffect, useState } from 'react'
import axios from 'axios'

import { Conteudo, TeamContainer, Titulo, Checkbox } from '../../styles/theme'

import { ITeam, Props } from '../../types'
import { useContexto } from '../../hooks'

export function Right() {
    const { teams, team, setTeam, filteredTeams, setFilteredTeams } = useContexto()

    const handleClick = (team_: ITeam) => {
        if (team_ === team) {
            setTeam(undefined);
            setFilteredTeams([]);
        } else {
            setTeam(team_);
            setFilteredTeams([team_]);
        }
    };

    return (
        <div>
            <Titulo>Times</Titulo>

            <TeamContainer>
                {teams.map((team: any) => (
                    <div key={team.id}>
                        <label>
                            <Conteudo>
                                <Checkbox
                                    value={team.id}
                                    type="checkbox"
                                    checked={team === filteredTeams[0]} onChange={() => {
                                        handleClick(team);
                                    }}
                                />
                                {team.name}
                            </Conteudo>
                        </label>
                    </div>
                ))}
            </TeamContainer>
        </div>
    )
}