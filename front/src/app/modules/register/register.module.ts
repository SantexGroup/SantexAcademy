import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { RegisteranswerComponent } from './registeranswer/registeranswer.component';
import { RegisterbuttonComponent } from './registerbutton/registerbutton.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { RegisterverificationComponent } from './registerverification/registerverification.component';


@NgModule({
  declarations: [
    RegisteranswerComponent,
    RegisterbuttonComponent,
    RegisterformComponent,
    RegisterverificationComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisteranswerComponent,
    RegisterbuttonComponent,
    RegisterformComponent,
  ]
})
export class RegisterModule { }
