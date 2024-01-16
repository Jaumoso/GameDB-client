import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GamedetailsComponent } from './gamedetails/gamedetails.component';
import { GamesComponent } from './games/games.component';
import { LibraryComponent } from './library/library.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StarRatingModule } from 'angular-star-rating';
import { MatDialogModule } from '@angular/material/dialog';

import { DateAgoPipe } from './../pipes/date-ago.pipe';


@NgModule({
  declarations: [
    GamedetailsComponent,
    GamesComponent,
    LibraryComponent,
    DateAgoPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatDialogModule,
    NgCircleProgressModule.forRoot({
      // defaults
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),
    StarRatingModule.forRoot(),
  ],
  exports: [
    GamedetailsComponent,
    GamesComponent,
    LibraryComponent
  ]
})
export class GameModule { }
