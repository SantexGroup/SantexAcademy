import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardPageComponent } from './modules/dashboard/dashboard-page/dashboard-page.component';
import { QuienessomosComponent } from './modules/pages/quienessomos/quienessomos.component';
import { IntegranteComponent } from './modules/pages/integrante/integrante.component';
import { CatalogoComponent } from './modules/pages/catalogo/catalogo.component';
import { RegisterformComponent } from './modules/register/registerform/registerform.component';
import { RegisteranswerComponent } from './modules/register/registeranswer/registeranswer.component';
import { ErrorPageComponent } from './modules/share/error-page/error-page.component';
import { AdminComponent } from './modules/pages/admin/admin.component';
import { ValidarTokenGuard } from './core/guards/validar-token.guard';

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
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'protected',
    loadChildren: () => import('./modules/protected/protected.module').then(m => m.ProtectedModule),
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
  },
  {
    path: 'dashboard',
    component:DashboardPageComponent,
  },
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
    canActivate: [ ValidarTokenGuard ],
    canLoad: [ ValidarTokenGuard ]
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
    path: '',
    redirectTo: 'catalogo-cursos',
    pathMatch: 'full',
  },
  {
    path: '**',
    component:ErrorPageComponent,
  },
  // {
  //   path: '404',
  //   component: ErrorPageComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


  // {
  //   path: '**',
  //   redirectTo: '404'
  // },