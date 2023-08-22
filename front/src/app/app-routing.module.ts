import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './modules/user/user.component';
import { LoginComponent } from './modules/components/login/login.component';
import { RegistroComponent } from './modules/components/registro/registro.component';


const routes: Routes = [
  { 
    path: 'login', component: LoginComponent 
  },
  { 
    path: 'registro', component: RegistroComponent 
  },
  { 
    path: 'user', component: UserComponent 
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  { 
    path: '', redirectTo: '/login', pathMatch: 'full' 
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
