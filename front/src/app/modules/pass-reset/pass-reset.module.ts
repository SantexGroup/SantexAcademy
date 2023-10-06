import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassResetRoutingModule } from './pass-reset-routing.module';
import { PassResetComponent } from './components/pass-reset/pass-reset.component';
import { FormsModule } from '@angular/forms';
import { ConfirmResetComponent } from './components/confirm-reset/confirm-reset.component';


@NgModule({
  declarations: [
    PassResetComponent,
    ConfirmResetComponent
  ],
  imports: [
    CommonModule,
    PassResetRoutingModule,
    FormsModule
  ]
})
export class PassResetModule { }
