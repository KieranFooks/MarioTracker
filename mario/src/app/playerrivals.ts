// Interfaces of the GET /api/Players/{id}/Rivals
export interface PlayerRivals {
    id: number;
    firstname: string;
    avatar: string;
    nbRaces: number;
    nbWins: number;
    ratio: number;
}