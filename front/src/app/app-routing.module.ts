import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './core/guards/login/loggedin/loggedin.guard';
import { NotLoggedInGuard } from './core/guards/login/notloggedin/notloggedin.guard';

const routes: Routes = [
  {
    path: 'auth',
    canActivate: [NotLoggedInGuard],
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
  },
  {
    path: 'dashboard',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
