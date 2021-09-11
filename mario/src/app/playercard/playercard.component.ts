import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { PlayersService } from '../players.service'
import { CupService } from '../cup.service'
import { CupInfo } from '../cup'
import { PlayerStats } from '../playerstats'
import { PlayerRaces } from '../playerraces'
import { PlayerRivals } from '../playerrivals'
import { PlayerTracks } from '../playertracks'

@Component({
  selector: 'app-playercard',
  templateUrl: './playercard.component.html',
  styleUrls: ['./playercard.component.css']
})
export class PlayercardComponent implements OnInit, OnChanges {

  // Website
  www = 'https://mariokart-recrutement.3ie.fr';

  @Input() selectedPlayerId: number;
  selectedPlayerInfo: PlayerStats;
  selectedPlayerRaces: PlayerRaces;
  selectedPlayerRivals: PlayerRivals[];
  selectedPlayerTracks: PlayerTracks[];
  cupInfo: CupInfo;

  // Columns of the table
  displayedColumnsRaces: string[] = ['No.', 'vignette', 'name', 'engine', 'date', 'position', 'elochange'];
  displayedColumnsRivals: string[] = ['avatar', 'firstname', 'nbRaces', 'nbWins', 'ratio'];
  displayedColumnsTracks: string[] = ['vignette', 'name', 'nbRaces', 'nbWins', 'ratio', 'score'];

  getTrackStats(id: number): PlayerTracks {
    return this.selectedPlayerTracks.find(track => track.id == id);
  }

  getCupNbRaces(): number {
    let nbRaces = 0;
    for (let i = 0; i < this.cupInfo.tracks.length; i++) {
      let trackId = this.cupInfo.tracks[i].id;
      nbRaces += this.selectedPlayerTracks.find(track => track.id == trackId).nbRaces;
    }

    return nbRaces;
  }

  getCupNbWins(): number {
    let nbWins = 0;
    for (let i = 0; i < this.cupInfo.tracks.length; i++) {
      let trackId = this.cupInfo.tracks[i].id;
      nbWins += this.selectedPlayerTracks.find(track => track.id == trackId).nbWins;
    }

    return nbWins;
  }

  ngOnChanges() {
    if (this.selectedPlayerId != -1) {
      this.playersService.getPlayer(this.selectedPlayerId).subscribe(player =>
        {
          this.selectedPlayerInfo = player;
          this.cupService.getCup(player.favoriteCup.id).subscribe(cup => this.cupInfo = cup);
        });
      this.playersService.getPlayerRaces(this.selectedPlayerId).subscribe(player => this.selectedPlayerRaces = player);
      this.playersService.getPlayerRivals(this.selectedPlayerId).subscribe(player => this.selectedPlayerRivals = player);
      this.playersService.getPlayerTracks(this.selectedPlayerId).subscribe(player => this.selectedPlayerTracks = player);
    }
  }

  constructor(private playersService: PlayersService, private cupService: CupService) { }

  ngOnInit(): void {
  }
}