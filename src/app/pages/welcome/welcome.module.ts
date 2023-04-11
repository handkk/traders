import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { SharedModule } from './shared.module';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    SharedModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent,
    SharedModule
  ]
})
export class WelcomeModule { }
