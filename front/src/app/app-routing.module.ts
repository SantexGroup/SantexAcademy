import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './modules/usuario/registro/registro.component';
import { LoginComponent } from './modules/usuario/login/login.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
/*   {
    path: '**',
    redirectTo: 'dashboard'
  },  */
  {
    path: 'registro',
    component: RegistroComponent
  },

  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
