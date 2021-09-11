// Interfaces of the GET /api/Players/{id}/Tracks
export interface PlayerTracks {
    id: number;
    name: string;
    vignette: string;
    picture: string;
    nbRaces: number;
    score: number;
    ratio: number;
    nbWins: number;
}