import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Player } from '../player'
import { PlayersService } from '../players.service'
import { PostRacePlayer } from '../post-race'

@Component({
  selector: 'app-mainplayers',
  templateUrl: './mainplayers.component.html',
  styleUrls: ['./mainplayers.component.css']
})
export class MainplayersComponent implements OnInit {

  // Position Forms
  positionControl1 = new FormControl(1, [Validators.min(1), Validators.max(12), Validators.required]);
  positionControl2 = new FormControl(1, [Validators.min(1), Validators.max(12), Validators.required]);
  positionControl3 = new FormControl(1, [Validators.min(1), Validators.max(12), Validators.required]);
  positionControl4 = new FormControl(1, [Validators.min(1), Validators.max(12), Validators.required]);
  positionControl5 = new FormControl(1, [Validators.min(1), Validators.max(12), Validators.required]);
  positionControl6 = new FormControl(1, [Validators.min(1), Validators.max(12), Validators.required]);
  positionControl7 = new FormControl(1, [Validators.min(1), Validators.max(12), Validators.required]);
  positionControl8 = new FormControl(1, [Validators.min(1), Validators.max(12), Validators.required]);
  positionControl9 = new FormControl(1, [Validators.min(1), Validators.max(12), Validators.required]);
  positionControl10 = new FormControl(1, [Validators.min(1), Validators.max(12), Validators.required]);
  positionControl11 = new FormControl(1, [Validators.min(1), Validators.max(12), Validators.required]);
  positionControl12 = new FormControl(1, [Validators.min(1), Validators.max(12), Validators.required]);

  // List of players
  players: Player[];

  // List of racers
  racers: PostRacePlayer[];

  // website link (called by the template)
  www: string = "https://mariokart-recrutement.3ie.fr/"

  // On update : send players to the parent component (mainboard)
  @Output() eventPlayers: EventEmitter<any> = new EventEmitter<any>();
  update() {
    this.eventPlayers.emit(this.racers);
  }

  constructor(private playerService: PlayersService) { }

  // Init racers to default value and subscribe players to the http GET
  ngOnInit(): void {
    this.racers = [
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
    this.playerService.getPlayers().subscribe(players => this.players = players);
  }
}
