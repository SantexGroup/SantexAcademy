import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './register-page/register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ]
})
export class RegisterModule { }
