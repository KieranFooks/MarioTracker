import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { PostRace, PostRacePlayer, PostRaceAnswer } from '../post-race'
import { RaceService } from '../race.service'

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.css']
})

export class MainboardComponent implements OnInit {

  selectedTrack: number;  // From maintrack component
  selectedEngine: number; // From mainengine component
  selectedPlayers: PostRacePlayer[]; // from mainplayers component
  race: PostRaceAnswer; // Interface that will be sent

  // Get from the component and set the desired engine
  setEngine(id: number) {
    this.selectedEngine = id;
  }

  // Get from the component and set the desired track
  setTrack(id: number) {
    this.selectedTrack = id;
  }

  // Get from the component and set the desired racers and positions
  setPlayers(players: PostRacePlayer[]) {
    this.selectedPlayers = players;
  }

  // Disable post button unless conditions are met
  disablePost(): boolean {
    return this.selectedEngine == null || this.selectedTrack == null
      || this.selectedPlayers.filter(player => player.playerId != -1 && player.position <= 12 && player.position >= 1).length == 0;
  }

  // Create and post the race
  submitRace() {

    // Error checking
    if (this.selectedEngine == null || this.selectedTrack == null) {
      this.snackBar.open("Engine Class or Track not selected !", "My Bad", { duration: 20000 });
      return;
    }

    // Check for duplicate racers or invalid positions
    for (let i = 0; i < this.selectedPlayers.length; i++) {
      if (this.selectedPlayers[i].playerId == -1)
        continue;

      if (this.selectedPlayers[i].position == null || this.selectedPlayers[i].position > 12 ||  this.selectedPlayers[i].position < 1)
      {
        this.snackBar.open(`Player ${i + 1} position is invalid !`, 'My Bad', { duration: 20000 });
        return;
      }

      for (let j = i + 1; j < this.selectedPlayers.length; j++) {
        if (this.selectedPlayers[i].playerId == this.selectedPlayers[j].playerId) {
          this.snackBar.open(`Player ${i + 1} and Player ${j + 1} are the same, please change before submitting the race`, 'My Bad', { duration: 20000 });
          return;
        }
      }
    }



    // Build the race to post
    let race: PostRace = {
      trackId: this.selectedTrack,
      engineClassId: this.selectedEngine,
      players: this.selectedPlayers.filter(player => player.playerId != -1 && player.position <= 12 && player.position >= 1),
      creationDate: new Date().toISOString().split('.')[0] + "Z"
    }

    // POST the race
    this.raceService.putRace(race).subscribe(answer => this.race == answer);
    // TODO error checking
    // Inform the user
    this.snackBar.open('New race added !', 'OK', { duration: 2000 });
  }

  // Reset Button
  reset() {
    window.location.reload();
  }

  constructor(private raceService: RaceService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // Init players to default values
    this.selectedPlayers = [
      { playerId: -1, position: 1 },
      { playerId: -1, position: 2 },
      { playerId: -1, position: 3 },
      { playerId: -1, position: 4 },
      { playerId: -1, position: 5 },
      { playerId: -1, position: 6 },
      { playerId: -1, position: 7 },
      { playerId: -1, position: 8 },
      { playerId: -1, position: 9 },
      { playerId: -1, position: 10 },
      { playerId: -1, position: 11 },
      { playerId: -1, position: 12 }
    ]
  }
}
