import { Component, OnInit } from '@angular/core';

import { Player } from '../player'
import { PlayersService } from '../players.service'

@Component({
  selector: 'app-compareboard',
  templateUrl: './compareboard.component.html',
  styleUrls: ['./compareboard.component.css']
})
export class CompareboardComponent implements OnInit {

  // List of players
  players: Player[];

  selectedPlayer1: number;
  selectedPlayer2: number;

  // website link (called by the template)
  www: string = "https://mariokart-recrutement.3ie.fr/"

  constructor(private playerService: PlayersService) {
    this.selectedPlayer1 = -1;
    this.selectedPlayer2 = -1;
   }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe(players => this.players = players);
  }

}
