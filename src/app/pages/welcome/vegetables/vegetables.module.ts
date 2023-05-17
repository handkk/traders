import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VegetablesRoutingModule } from './vegetables-routing.module';
import { VegetablesComponent } from './vegetables.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    VegetablesComponent
  ],
  imports: [
    CommonModule,
    VegetablesRoutingModule,
    SharedModule
  ]
})
export class VegetablesModule { }
