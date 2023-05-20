export interface Props {
	selectedTeam: (team_id: number | null) => void;
	theme: string
}

export interface LeftProps {
	selectedTeam:  number | null;
	theme: string
}

export interface IMatch {
	id: number;
	host: {
		id: number;
		name: string;
	};
	visitor: {
		id: number;
		name: string;
	};
	date: string;
}

export interface ITeam {
	id: number;
	name: string;
}

export interface ContextProps {
    team: ITeam | undefined;
    teams: ITeam[];
    matches: IMatch[];
    theme: ThemeProps;
	filteredTeams: ITeam[];
    setTeam: Function;
    setTheme: Function;
	setFilteredTeams: Function;
}

export interface ThemeProps {
    name: string;
    background: string;
    main: string;
    title: string;
    text: string;
    imgbackground: string;
}