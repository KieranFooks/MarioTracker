// Interfaces of the GET /api/Cup
export interface CupInfo {
    id: number;
    name: string;
    picture: string;
    tracks: Track[];
}

interface Track {
    id: number;
    name: string;
    vignette: string; // path
    picture: string; // path
}