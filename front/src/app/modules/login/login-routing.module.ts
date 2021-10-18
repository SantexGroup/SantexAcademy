import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';

import { NotLoggedInGuard } from '../../core/guards/login/notloggedin/notloggedin.guard';

const routes: Routes = [
  {
    path: 'login',
    canActivate: [NotLoggedInGuard],
    component: LoginPageComponent,
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
