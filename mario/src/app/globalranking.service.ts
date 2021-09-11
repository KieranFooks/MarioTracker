import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';

import { GlobalRanking } from './globalranking'

@Injectable({
  providedIn: 'root'
})
export class GlobalrankingService {

  private rankingUrl = 'api/Players/GlobalRanking' // api path

  getGlobalRanking(): Observable<GlobalRanking[]> {
    return this.http.get<GlobalRanking[]>(this.rankingUrl);
  }

  constructor(private http: HttpClient) { }
}
