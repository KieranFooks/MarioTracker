import { Engine } from "./engines";
import { Track } from "./race";

// Interface of the GET /api/Players/{id1}/Compare/{id2}
export interface ComparePlayers {
    player1: ComparePlayer;
    player2: ComparePlayer;
    races: FaceToFaceRace[];
}

export interface ComparePlayer {
    id: number;
    firstname: string;
    avatar: string;
    score: number;
    ratio: number;
    nbWins: number;
    elo: number;
}

export interface FaceToFaceRace {
    date: string;
    positionPlayer1: number;
    positionPlayer2: number;
    track: Track;   // imported
    engineClass: Engine;    // imported
}