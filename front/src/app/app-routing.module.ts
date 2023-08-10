import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarraComponent } from './barra/barra.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { DashboardPageComponent } from './modules/dashboard/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'barra',
    component: BarraComponent
  },
  {
    path: '',
    component: DashboardPageComponent
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
