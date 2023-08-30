import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyPageComponent } from './modules/body-page/body-page.component';
import { RegistroComponent } from './modules/usuario/registro/registro.component';
import { LoginComponent } from './modules/usuario/login/login.component';
import { ExperiencesComponent } from './modules/crud-data/experiences/experiences.component';
import { FormationsComponent } from './modules/crud-data/formations/formations.component';
import { OptionalsComponent } from './modules/crud-data/optionals/optionals.component';

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
  },
  {
    path: 'experiencias',
    component: ExperiencesComponent    
  },
  {
    path: 'formaciones',
    component: FormationsComponent
  },
  {
    path: 'optcionales',
    component: OptionalsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
