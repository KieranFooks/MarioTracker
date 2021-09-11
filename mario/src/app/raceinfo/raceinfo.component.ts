import { Component, OnInit } from '@angular/core';
import { Race } from '../race';

@Component({
  selector: 'app-raceinfo',
  templateUrl: './raceinfo.component.html',
  styleUrls: ['./raceinfo.component.css']
})
export class RaceinfoComponent implements OnInit {

  url = 'https://mariokart-recrutement.3ie.fr' // website link (for the template)
  selectedRace: Race; // Race selected by the user
  vignette: string; // Race Vignette path

  // On selection : change the race and the vignette path
  update(race: Race) {
    this.selectedRace = race;
    this.vignette = this.url + this.selectedRace.track.picture;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
