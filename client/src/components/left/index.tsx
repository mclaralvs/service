import { Match } from  '../match';

import { TituloLeft } from '../../styles/theme';

import { useContexto } from '../../hooks';

export function Left () {    
    const { team } = useContexto()
    
	return (
        <div>
            <TituloLeft>{team ? `Partidas - ${team.name}` : 'Partidas'}</TituloLeft>

            <Match />
        </div>
    )
}