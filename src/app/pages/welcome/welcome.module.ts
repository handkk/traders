import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { SharedModule } from './shared.module';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  imports: [
    WelcomeRoutingModule,
    SharedModule,
    NzIconModule,
    NzDropDownModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent,
    SharedModule
  ]
})
export class WelcomeModule { }
