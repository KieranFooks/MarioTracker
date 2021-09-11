import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ComparePlayers } from './compare'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  getCompare(player1: number, player2: number): Observable<ComparePlayers> {
    return this.http.get<ComparePlayers>(`api/Players/${player1}/Compare/${player2}`);
  }

  constructor(private http: HttpClient) { }
}
