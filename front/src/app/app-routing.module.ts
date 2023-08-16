import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAdminComponent } from './modules/dashboard-admin/dashboard-admin.component';

const routes: Routes = [
  {
    path: 'dashboard-admin',
    component: DashboardAdminComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard-admin'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
