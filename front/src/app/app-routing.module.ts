import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyPageComponent } from './modules/body-page/body-page.component';
import { RegistroComponent } from './modules/usuario/registro/registro.component';
import { LoginComponent } from './modules/usuario/login/login.component';
import { HeaderPageComponent } from './modules/header-page/header-page.component';
import { FooterPageComponent } from './modules/footer-page/footer-page.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: '',
    component: BodyPageComponent
  }, 
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
