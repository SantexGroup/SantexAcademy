import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class UsuarioModule { }
