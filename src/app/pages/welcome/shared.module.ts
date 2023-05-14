import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { IconsProviderModule } from '../../icons-provider.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzMessageModule } from 'ng-zorro-antd/message';


@NgModule({
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzToolTipModule,
    IconsProviderModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzTableModule,
    NzMessageModule
  ],
  exports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzToolTipModule,
    IconsProviderModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule,
    NzInputModule,
    NzSelectModule,
    NzButtonModule,
    NzInputNumberModule,
    NzDatePickerModule,
    NzTableModule,
    NzMessageModule
  ]
})
export class SharedModule { }
