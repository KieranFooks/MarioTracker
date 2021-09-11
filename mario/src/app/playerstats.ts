import { Track } from './race'

// Interfaces of the GET /api/Player/{id}
export interface PlayerStats {
    id: number;
    firstname: string;
    avatar: string; // path
    score: number;
    ratio: number;
    favoriteCup: FavoriteCup;
    favoriteTrack: Track;
}

export interface FavoriteCup {
    id: number;
    name: string;
    picture: string; // path
}
