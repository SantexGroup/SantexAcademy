import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoluntarioGuard } from './core/guards/voluntario.guard';
import { OrganizacionGuard } from './core/guards/organizacion.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path:'index',
    loadChildren: ()=> import ('./modules/index/index.module').then(m=>m.IndexModule)
  },
  {
    path:'voluntarios',
    loadChildren:()=> import('./modules/voluntarios/voluntarios.module').then(m=>m.VoluntariosModule),
    canLoad:[VoluntarioGuard]
  },
  {
    path:'organizaciones',
    loadChildren:()=>import('./modules/organizaciones/organizaciones.module').then(m=>m.OrganizacionesModule),
    canLoad:[OrganizacionGuard]

  },
  {
    path: '**',
    redirectTo: 'index'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
