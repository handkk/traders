import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayCollectionsRoutingModule } from './day-collections-routing.module';
import { SharedModule } from '../shared.module';
import { DayCollectionsComponent } from './day-collections.component';


@NgModule({
  declarations: [
    DayCollectionsComponent
  ],
  imports: [
    CommonModule,
    DayCollectionsRoutingModule,
    SharedModule
  ]
})
export class DayCollectionsModule { }
