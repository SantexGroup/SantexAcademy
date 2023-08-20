import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { OptionsRegisterComponent } from './modules/auth/pages/options-register/options-register.component';
import { VolunteerRegisterComponent } from './modules/auth/pages/volunteer-register/volunteer-register.component';

const routes: Routes = [
  { path: '', title: 'VolunTime - Inicio', component: HomePageComponent },
  {
    path: 'login',
    title: 'VolunTime - Iniciar sesión',
    component: LoginComponent,
  },
  {
    path: 'options-register',
    title: 'VolunTime - Opciones de registro',
    component: OptionsRegisterComponent,
  },
  {
    path: 'volunteer-register',
    title: 'VolunTime - Registro de voluntarios',
    component: VolunteerRegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
