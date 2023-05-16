import { Match } from  '../match';

import { Titulo } from '../../styles/theme';

export function Left () {
	return (
        <div>
            <Titulo>Partidas</Titulo>

            <Match />
        </div>
    )
}