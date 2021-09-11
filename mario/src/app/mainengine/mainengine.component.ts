import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Engine } from '../engines'
import { EnginesService } from '../engines.service'

@Component({
  selector: 'app-mainengine',
  templateUrl: './mainengine.component.html',
  styleUrls: ['./mainengine.component.css']
})
export class MainengineComponent implements OnInit {

  // Array with all the engines
  engines: Engine[];
  // Selected Engine ID
  selectedEngine: number;

  // Output the selection to the parent component
  @Output() eventEngine: EventEmitter<any> = new EventEmitter<any>();
  selectEngine(id: number): void {
    this.eventEngine.emit(id);
  }

  constructor(private enginesService: EnginesService) { }

  // Get all the engines on init
  ngOnInit(): void {
    this.enginesService.getEngines().subscribe(engines => this.engines = engines);
  }

}
