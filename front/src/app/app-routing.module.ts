import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPageComponent } from './modules/dashboard/dashboard-page/dashboard-page.component';
import { RegisterverificationComponent } from './modules/register/registerverification/registerverification.component';
import { QuienessomosComponent } from './modules/pages/quienessomos/quienessomos.component';
import { IntegranteComponent } from './modules/pages/integrante/integrante.component';
import { CatalogoComponent } from './modules/pages/catalogo/catalogo.component';
import { RegisterformComponent } from './modules/register/registerform/registerform.component';
import { RegisteranswerComponent } from './modules/register/registeranswer/registeranswer.component';
import { ErrorPageComponent } from './modules/share/error-page/error-page.component';
import { AdminComponent } from './modules/pages/admin/admin.component';
import { PerfilAlumnoComponent } from './modules/pages/perfil-alumno/perfil-alumno.component';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then( m => m.UsersModule),
  },
  {
    path: 'cursos',
    loadChildren: () => import('./modules/cursos/cursos.module').then( m => m.CursosModule),
  },
  {
    path: 'dashboard',
    component:DashboardPageComponent,
  },
  { path: 'registerverification',
   component: RegisterverificationComponent },
  {
    path: 'quienes-somos',
    component:QuienessomosComponent,
  },
  {
    path: 'quienes-somos/:id',
    component:IntegranteComponent,
  },
  {
    path: 'catalogo-cursos',
    component:CatalogoComponent,
  },
  {
    path: 'register',
    component: RegisterformComponent,
  },
  {
    path: 'registeranswer',
    component: RegisteranswerComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'perfil-alumno',
    component: PerfilAlumnoComponent, 
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '**',
    component:ErrorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
