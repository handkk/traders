import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerCollectionComponent } from './customer-collection.component';

const routes: Routes = [
  {
    path: '', component: CustomerCollectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerCollectionRoutingModule { }
