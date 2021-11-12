import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from 'src/app/core/guards/login/loggedin/loggedin.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'profile',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: 'pet',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('../pet/pet.module').then(m => m.PetModule),
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
export class HomeRoutingModule { }
