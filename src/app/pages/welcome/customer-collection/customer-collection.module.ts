import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerCollectionRoutingModule } from './customer-collection-routing.module';
import { CustomerCollectionComponent } from './customer-collection.component';
import { SharedModule } from '../shared.module';


@NgModule({
  declarations: [
    CustomerCollectionComponent
  ],
  imports: [
    CommonModule,
    CustomerCollectionRoutingModule,
    SharedModule
  ]
})
export class CustomerCollectionModule { }
