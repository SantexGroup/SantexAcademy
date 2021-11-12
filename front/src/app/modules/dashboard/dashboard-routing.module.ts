import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from 'src/app/core/guards/login/loggedin/loggedin.guard';
import { NotLoggedInGuard } from 'src/app/core/guards/login/notloggedin/notloggedin.guard';

import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [LoggedInGuard],
    component: DashboardPageComponent,
    children: [ ]
  },  
  {
    path: '**',
    redirectTo: '/auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
