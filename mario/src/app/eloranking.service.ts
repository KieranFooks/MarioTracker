import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';

import { EloRanking } from './eloranking'

@Injectable({
  providedIn: 'root'
})
export class ElorankingService {

  private eloRankingUrl = 'api/Players/EloRanking' // path to the elo api

  getElo(): Observable<EloRanking[]> {
    return this.http.get<EloRanking[]>(this.eloRankingUrl);
  }

  constructor(private http: HttpClient) { }
}
