import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmerBillComponent } from './farmer-bill.component';

const routes: Routes = [
  {
    path: '', component: FarmerBillComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerBillRoutingModule { }
