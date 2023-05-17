import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmerRoutingModule } from './farmer-routing.module';
import { FarmerComponent } from './farmer.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    FarmerComponent
  ],
  imports: [
    CommonModule,
    FarmerRoutingModule,
    SharedModule
  ]
})
export class FarmerModule { }
