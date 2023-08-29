import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './modules/share/error-page/error-page.component';
import { UsersModule } from './modules/users/users.module';

const routes: Routes = [
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  // },
  // {
  //   path: '**',
  //   redirectTo: 'dashboard'
  // }

  {
    path: 'users',
    loadChildren: () => import('./modules/users/users.module').then( m => UsersModule)
  },

  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: 'users'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
