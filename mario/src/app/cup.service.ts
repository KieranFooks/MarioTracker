import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CupInfo } from './cup'

@Injectable({
  providedIn: 'root'
})
export class CupService {

  cupUrl = 'api/Cups' // Path to the cup api

  getCup(id: number): Observable<CupInfo> {
    return this.http.get<CupInfo>(this.cupUrl + `/${id}`);
  }

  constructor(private http: HttpClient) { }
}
