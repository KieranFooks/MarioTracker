import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { ComparePlayers } from '../compare'
import { CompareService } from '../compare.service'

@Component({
  selector: 'app-compareresult',
  templateUrl: './compareresult.component.html',
  styleUrls: ['./compareresult.component.css']
})
export class CompareresultComponent implements OnInit, OnChanges {

  // Website
  www = 'https://mariokart-recrutement.3ie.fr';

  // User input from parent component, contain IDs
  @Input() playersId1: number;
  @Input() playersId2: number;

  // GET result
  comparePlayers: ComparePlayers;

  // Columns of the table
  displayedColumns: string[] = ['No.', 'vignette', 'name', 'engine', 'date', 'player1', 'player2'];

  ngOnChanges() {
    if (this.playersId1 != -1 && this.playersId2 != -1)
      this.compareService.getCompare(this.playersId1, this.playersId2).subscribe(comparePlayers => this.comparePlayers = comparePlayers);
  }

  constructor(private compareService: CompareService) { }

  ngOnInit(): void {
  }
}
