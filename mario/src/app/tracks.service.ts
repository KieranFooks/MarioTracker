import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs';

import { Track } from './tracks'

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  private tracksUrl = 'api/Tracks' // path to the tracks api

  getTracks(): Observable<Track[]>{
    return this.http.get<Track[]>(this.tracksUrl);
  }

  constructor(private http: HttpClient) { }
}
