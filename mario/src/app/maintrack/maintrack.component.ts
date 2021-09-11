import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Track } from '../tracks'
import { TracksService } from '../tracks.service'

@Component({
  selector: 'app-maintrack',
  templateUrl: './maintrack.component.html',
  styleUrls: ['./maintrack.component.css']
})

export class MaintrackComponent implements OnInit {

  // Array with all the tracks
  tracks: Track[];
  // Selected Track
  selectedTrack: number;

  // Output the selection to the parent component
  @Output() eventTrack: EventEmitter<any> = new EventEmitter<any>();
  selectTrack(id: number): void {
    this.eventTrack.emit(id);
  }

  constructor(private tracksService: TracksService) { }

  // Get all the tracks on init
  ngOnInit(): void {
    this.tracksService.getTracks().subscribe(tracks => this.tracks = tracks);
  }
}
