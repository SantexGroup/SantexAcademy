import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuienessomosComponent } from './modules/pages/quienessomos/quienessomos.component';
import { CatalogoComponent } from './modules/pages/catalogo/catalogo.component';
import { Pagina404Component } from './modules/pages/pagina404/pagina404.component';
import { IntegranteComponent } from './modules/pages/integrante/integrante.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
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
    path: '**',
    component:Pagina404Component}
];

// {
 // path: '**',
  //redirectTo: 'dashboard'
//}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
