import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';
import { InputContraseniaComponent } from './modules/input-contrasenia/input-contrasenia.component';
import { InputLoginComponent } from './modules/input-login/input-login.component';
import { DashboardAdminComponent } from './modules/dashboard-admin/dashboard-admin.component';
import { PermissionsAdminGuard } from './core/guards/permissions-admin.guard';
import { PollsterDashboardComponent } from './modules/pollster-dashboard/pollster-dashboard.component';

const routes: Routes = [
  { path: 'login', component: InputLoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: InputLoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'dashboard-admin',
    component: DashboardAdminComponent,
    canActivate: [PermissionsAdminGuard]
  },

  { path: 'Contrasenia', component: InputContraseniaComponent },
  { path: 'dashboard-pollster', component: PollsterDashboardComponent },

  //Este path debe ir siempre al final para que redirija a dashboard-admin cuando el user ingrese una ruta inexistente
  {
    path: '**',
    redirectTo: 'dashboard-admin'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

