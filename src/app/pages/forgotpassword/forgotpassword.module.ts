import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotpasswordRoutingModule } from './forgotpassword-routing.module';
import { ForgotpasswordComponent } from './forgotpassword.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../welcome/shared.module';


@NgModule({
  declarations: [
    ForgotpasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ForgotpasswordRoutingModule
  ]
})
export class ForgotpasswordModule { }
