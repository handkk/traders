import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillPrintComponent } from './bill-print.component';

const routes: Routes = [
  {
    path: '', component: BillPrintComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillPrintRoutingModule { }
