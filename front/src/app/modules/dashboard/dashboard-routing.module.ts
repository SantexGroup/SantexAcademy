import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { FormUpdateComponent } from './form-update/form-update.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard-page/dashboard-page.module').then(m => m.DashboardPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
