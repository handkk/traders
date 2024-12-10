import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerBillComponent } from './farmer-bill.component';
import { FarmerBillRoutingModule } from './farmer-bill-routing.module';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    FarmerBillComponent
  ],
  imports: [
    CommonModule,
    FarmerBillRoutingModule,
    SharedModule
  ]
})
export class FarmerBillModule { }
