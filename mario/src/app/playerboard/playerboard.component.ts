import { Component, OnInit } from '@angular/core';

import { PlayersService } from '../players.service'
import { Player } from '../player'

@Component({
  selector: 'app-playerboard',
  templateUrl: './playerboard.component.html',
  styleUrls: ['./playerboard.component.css']
})
export class PlayerboardComponent implements OnInit {

  players: Player[];
  selectedPlayerId: number;

  constructor(private playersService: PlayersService) { }

  ngOnInit(): void {
    this.playersService.getPlayers().subscribe(players => this.players = players);
  }

}
