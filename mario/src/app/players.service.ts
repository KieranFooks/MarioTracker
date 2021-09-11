import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';

import { Player } from './player'
import { PlayerStats } from './playerstats'
import { PlayerRaces } from './playerraces'
import { PlayerRivals } from './playerrivals'
import { PlayerTracks } from './playertracks'

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private playersUrl = 'api/Players' // path to the players api

  // Get all the players
  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playersUrl);
  }

  // Get player info from the id
  getPlayer(id: number): Observable<PlayerStats> {
    return this.http.get<PlayerStats>(this.playersUrl + `/${id}`)
  }

  // Get info on player race
  getPlayerRaces(id: number): Observable<PlayerRaces> {
    return this.http.get<PlayerRaces>(this.playersUrl + `/${id}/Races`);
  }

  // Get info on player rivals
  getPlayerRivals(id: number): Observable<PlayerRivals[]> {
    return this.http.get<PlayerRivals[]>(this.playersUrl + `/${id}/Rivals`);
  }

  // Get info on player tracks
  getPlayerTracks(id: number): Observable<PlayerTracks[]> {
    return this.http.get<PlayerTracks[]>(this.playersUrl + `/${id}/Tracks`);
  }

  constructor(private http: HttpClient) { }
}
