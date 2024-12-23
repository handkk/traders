import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportCollectionsComponent } from './report-collections.component';

const routes: Routes = [
  {
    path: '', component: ReportCollectionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportCollectionsRoutingModule { }
