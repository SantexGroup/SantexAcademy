import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RegisteranswerComponent } from './registeranswer/registeranswer.component';
import { RegisterbuttonComponent } from './registerbutton/registerbutton.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisteranswerComponent,
    RegisterbuttonComponent,
    RegisterformComponent,
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
