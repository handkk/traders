import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { BillComponent } from '../bill/bill.component';

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'bill', component: BillComponent
  },
  // { path: '', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
