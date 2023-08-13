import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    loadChildren:()=> import('./modules/voluntarios/voluntarios.module').then(m=>m.VoluntariosModule)
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
