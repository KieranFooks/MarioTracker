import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

// Simple race for testing purposes
import { Race } from './race'
import { PostRace, PostRaceAnswer } from './post-race'
@Injectable({
  providedIn: 'root'
})

export class RaceService {

  private racesUrl = 'api/Races'; // path to the race api

  //Options for the POST
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getRaces(): Observable<Race[]> {
    return this.http.get<Race[]>(this.racesUrl);
  }

  putRace(race: PostRace): Observable<PostRaceAnswer> {
    return this.http.post<PostRaceAnswer>(this.racesUrl, race, this.httpOptions);
  }

  constructor(private http: HttpClient) { }
}
