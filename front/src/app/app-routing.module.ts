import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { LoginPageComponent } from './modules/logIn/login-page/login-page.component';

const routes: Routes = [
  { path: '', title: 'VolunTime - Inicio', component: HomePageComponent },
  {
    path: 'login',
    title: 'VolunTime - Iniciar sesión',
    component: LoginPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
