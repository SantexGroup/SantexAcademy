import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioRegistroComponent } from '../formulario-registro/formulario-registro.component';
import { LoginComponent } from '../login/login.component';
import { StudentsComponent } from '../students/students/students.component';



const routes: Routes = [

  { path: 'registro', component: FormularioRegistroComponent },
  { path: 'login', component: LoginComponent},
  { path: 'user-dashboard', component: StudentsComponent },

  {
    path: 'dashboard',
    loadChildren: () => import('../../modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
