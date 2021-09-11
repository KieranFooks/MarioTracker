import { Component, OnInit, Input } from '@angular/core';

import { Race } from '../race'
import { RaceService } from '../race.service'
import { RaceinfoComponent } from '../raceinfo/raceinfo.component'

@Component({
  selector: 'app-racelist',
  templateUrl: './racelist.component.html',
  styleUrls: ['./racelist.component.css']
})

export class RacelistComponent implements OnInit {

  // Link to raceinfo sibling
  @Input('raceinfo') raceInfo: RaceinfoComponent;

  // List containing all the races complying with the search info
  races: Race[];

  // Race selected by the user
  selectedRace: Race;

  onSelect(race: Race) {
    this.selectedRace = race;
    this.raceInfo.update(race);
  }

  constructor(private raceService: RaceService) { }

  // Gets all the races on init
  ngOnInit(): void {
    this.raceService.getRaces().subscribe(races => this.races = races);
  }
}
