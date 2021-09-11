import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { GlobalRanking } from '../globalranking';
import { GlobalrankingService } from '../globalranking.service';
import { ElorankingService } from '../eloranking.service';
import { EloRanking } from '../eloranking';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {

  // Website
  www = 'https://mariokart-recrutement.3ie.fr/';

  // Array with all the rankings
  globalRankings: GlobalRanking[];
  eloRankings: EloRanking[];

  // Columns of the table
  displayedColumns: string[] = ['No.', 'avatar', 'firstname', 'nbRaces', 'ratio', 'score', 'elo'];

  // Sorting
  @ViewChild(MatSort) sort: MatSort;
  dataSource: any;

  // Retunrn a player's elo
  getPlayerElo(id: number): string{
    return this.eloRankings.find(player => player.id == id).score.toFixed(0);
  }

  constructor(private globalRankingService: GlobalrankingService, private eloRankingService: ElorankingService) { }

  ngOnInit(): void {
    this.eloRankingService.getElo().subscribe(eloRankings => this.eloRankings = eloRankings);

    // Init it to empty to avoid errors
    this.dataSource = new MatTableDataSource();

    // Get the GlobalRanking. Because it's async, wait for it to finish before changing dataSource
    this.globalRankingService.getGlobalRanking().subscribe(globalRankings => {
      this.globalRankings = globalRankings;
      this.dataSource = new MatTableDataSource(this.globalRankings);
      this.dataSource.sort = this.sort;
    });
  }
}