import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';

import { Engine } from './engines'

@Injectable({
  providedIn: 'root'
})
export class EnginesService {

  private engineUrl = 'api/EngineClasses' // path to the engine api

  getEngines(): Observable<Engine[]>{
    return this.http.get<Engine[]>(this.engineUrl);
  }

  constructor(private http: HttpClient) { }
}
