import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { RacelistComponent } from './racelist/racelist.component';
import { RaceboardComponent } from './raceboard/raceboard.component';
import { RaceinfoComponent } from './raceinfo/raceinfo.component';
import { MainboardComponent } from './mainboard/mainboard.component';
import { MainplayersComponent } from './mainplayers/mainplayers.component';
import { MaintrackComponent } from './maintrack/maintrack.component';
import { MainengineComponent } from './mainengine/mainengine.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { CompareboardComponent } from './compareboard/compareboard.component';
import { CompareresultComponent } from './compareresult/compareresult.component';
import { PlayerboardComponent } from './playerboard/playerboard.component';
import { PlayercardComponent } from './playercard/playercard.component';


@NgModule({
  declarations: [
    AppComponent,
    RacelistComponent,
    RaceboardComponent,
    RaceinfoComponent,
    MainboardComponent,
    MainplayersComponent,
    MaintrackComponent,
    MainengineComponent,
    ScoreboardComponent,
    CompareboardComponent,
    CompareresultComponent,
    PlayerboardComponent,
    PlayercardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatSortModule,
    MatSnackBarModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
