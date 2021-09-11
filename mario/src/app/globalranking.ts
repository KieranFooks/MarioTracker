// Interface of the GET /api/Players/GlobalRanking
export interface GlobalRanking {
    score: number;
    nbRaces: number;
    ratio: number;
    id: number;
    firstname: string;
    avatar: string; // path
}