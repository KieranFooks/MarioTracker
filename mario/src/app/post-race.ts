// Interfaces of the POST /api/Races
export interface PostRace {
    trackId: number;
    engineClassId: number;
    players: PostRacePlayer[];
    creationDate: string;
}

export interface PostRacePlayer {
    playerId: number;
    position: number;
}

export interface PostRaceAnswer {
    id: number;
    trackId: number;
    engineClassId: number;
    creationDate: string;
}