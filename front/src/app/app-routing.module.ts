import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoluntarioGuard } from './core/guards/voluntario.guard';
import { OrganizacionGuard } from './core/guards/organizacion.guard';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
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
    path:'admin',
    loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule),
    canLoad:[AdminGuard]
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
