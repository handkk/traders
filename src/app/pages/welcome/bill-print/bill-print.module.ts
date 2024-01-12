import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillPrintRoutingModule } from './bill-print-routing.module';
import { BillPrintComponent } from './bill-print.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    BillPrintComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BillPrintRoutingModule
  ]
})
export class BillPrintModule { }
