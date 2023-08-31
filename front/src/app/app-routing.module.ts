import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuienessomosComponent } from './modules/pages/quienessomos/quienessomos.component';
import { CatalogoComponent } from './modules/pages/catalogo/catalogo.component';
import { Pagina404Component } from './modules/pages/pagina404/pagina404.component';
import { IntegranteComponent } from './modules/pages/integrante/integrante.component';
import { RegisterformComponent } from './components/register/registerform/registerform.component';
import { DashboardPageComponent } from './modules/dashboard/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component:DashboardPageComponent
  },
  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then( m => m.UsersModule),
  },
  {
    path: 'quienes-somos',
    component:QuienessomosComponent,
  },
  {
    path: 'quienes-somos/:id',
    component:IntegranteComponent
  },
  {
    path: 'catalogo-cursos',
    component:CatalogoComponent,
  },
  {
    path: 'register',
    component: RegisterformComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component:Pagina404Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


  // {
  //   path: '404',
  //   component: ErrorPageComponent
  // },

    // {
  //   path: '**',
  //   redirectTo: '404'
  // },