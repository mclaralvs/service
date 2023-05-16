import { useEffect, useState } from 'react'
import axios from 'axios'

import { Conteudo, TeamContainer, Titulo } from '../../styles/theme'

export function Right() {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3004/team`).then((res: any) => {
            setTeams(res.data.sort((a: any, b: any) => {
                const valueA = a.name.toLowerCase();
                const valueB = b.name.toLowerCase();

                return valueA.localeCompare(valueB);
            }
            ))
        })
    })

    return (
        <div>
            <Titulo>Times</Titulo>

            <TeamContainer>
                {teams.map((team: any) => (
                    <div key={team.id}>
                        <Conteudo>{team.name}</Conteudo>
                    </div>
                ))}
            </TeamContainer>
        </div>
    )
}