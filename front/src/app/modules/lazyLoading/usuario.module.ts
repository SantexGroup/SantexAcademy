import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from '../usuario/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from '../usuario/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { AbandonGuard } from 'src/app/core/guards/abandon.guard';

const userRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent,
    canDeactivate: [AbandonGuard]
  }
]

@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forChild(userRoutes)
  ]
})
export class UsuarioModule { }
