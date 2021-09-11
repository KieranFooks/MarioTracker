// Interfaces of the GET /api/Races
export interface Race {
    id: number;
    date: string;
    track: Track;
    engineClass: EngineClass;
    players: PlayerPosition[];
}

export interface Track {
    id: number;
    name: string;
    vignette: string; // path
    picture: string; // path
}

export interface EngineClass {
    id: number;
    name: string;
}

export interface PlayerPosition {
    id: number;
    firstname: string;
    avatar: string; // path
    position: number;
}