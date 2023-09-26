import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidationEmailComponent } from './modules/validationsUsers/validation-email/validation-email.component';
import { CreateNewCodeComponent } from './modules/validationsUsers/create-new-code/create-new-code.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'verificar-email/:email/:code',component:ValidationEmailComponent 
  },
  {
    path: 'createnewcode',component:CreateNewCodeComponent 
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
