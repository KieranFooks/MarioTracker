import { Track, EngineClass, PlayerPosition } from './race'

// Interfaces of the GET /api/Players/{id}/Races
export interface PlayerRaces {
    date: string;
    position: number;
    track: Track;
    engineClass: EngineClass;
    opponents: PlayerPosition[];
    eloChange: number;
}