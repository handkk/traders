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
    path: 'bill', loadChildren: () => import('../bill/bill.module').then(m => m.BillModule)
  },
  {
    path: 'farmer', loadChildren: () => import('../farmer/farmer.module').then(m => m.FarmerModule)
  },
  {
    path: 'vegetables', loadChildren: () => import('../vegetables/vegetables.module').then(m => m.VegetablesModule)
  },
  // { path: '', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
