import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayCollectionsComponent } from './day-collections.component';

const routes: Routes = [
  {
    path: '', component: DayCollectionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DayCollectionsRoutingModule { }
