import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { BillComponent } from '../bill/bill.component';

const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent, title: 'S S T | Customers'
  },
  {
    path: 'bill', loadChildren: () => import('../bill/bill.module').then(m => m.BillModule), title: 'S S T | Customer Bills'
  },
  {
    path: 'farmer', loadChildren: () => import('../farmer/farmer.module').then(m => m.FarmerModule), title: 'S S T | Farmers'
  },
  {
    path: 'vegetables', loadChildren: () => import('../vegetables/vegetables.module').then(m => m.VegetablesModule), title: 'S S T | Vegetables'
  },
  {
    path: 'customer-collection', loadChildren: () => import('../customer-collection/customer-collection.module').then(m => m.CustomerCollectionModule),
    title: 'S S T | Customer Collections'
  },
  {
    path: 'user_settings', loadChildren: () => import('../user-settings/user-settings.module').then(m => m.UserSettingsModule),
    title: 'S S T | Users'
  },
  {
    path: 'today_bills', loadChildren: () => import('../day-collections/day-collections.module').then(m => m.DayCollectionsModule),
    title: 'S S T | Today Bills'
  },
  {
    path: 'bill_print', loadChildren: () => import('../bill-print/bill-print.module').then(m => m.BillPrintModule),
    title: 'S S T | Bill Print'
  },
  {
    path: 'statement', loadChildren: () => import('../statement/statement.module').then(m => m.StatementModule),
    title: 'S S T | Statement'
  },
  {
    path: 'farmer_bill', loadChildren: () => import('../farmer-bill/farmer-bill.module').then(m => m.FarmerBillModule),
    title: 'S S T | Farmer Bill'
  },
  {
    path: 'collections_report', loadChildren: () => import('../report-collections/report-collections.module').then(m => m.ReportCollectionsModule),
    title: 'S S T | Report Collections'
  }
  // { path: '', pathMatch: 'full', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
