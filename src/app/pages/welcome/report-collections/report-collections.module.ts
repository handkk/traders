import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared.module';
import { ReportCollectionsComponent } from './report-collections.component';
import { ReportCollectionsRoutingModule } from './report-collections-routing.module';


@NgModule({
  declarations: [
    ReportCollectionsComponent
  ],
  imports: [
    CommonModule,
    ReportCollectionsRoutingModule,
    SharedModule
  ]
})
export class ReportCollectionsModule { }
