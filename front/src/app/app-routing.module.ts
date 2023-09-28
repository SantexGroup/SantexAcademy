import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{SigupViewComponent} from './modules/sigup-view/sigup-view.component'

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'signup',
    component: SigupViewComponent,
  }, 
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
