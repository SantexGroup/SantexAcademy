import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { OptionsRegisterComponent } from './modules/auth/pages/options-register/options-register.component';
import { VolunteerRegisterComponent } from './modules/auth/pages/volunteer-register/volunteer-register.component';
// import { CoordinatorRegisterComponent } from './modules/auth/pages/coordinator-register/coordinator-register.component';


const routes: Routes = [
  { path: '', title: 'VolunTime - Inicio', component: HomePageComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.authModule),
  },
  {
    path: '**',
    title: 'VolunTime - Página no encontrada!',
    component: NotfoundComponent,
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
