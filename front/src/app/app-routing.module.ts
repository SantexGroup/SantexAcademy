import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) },
  { path: 'home', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule) },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: 'news', loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, //supongo que home tendra algo para sacarlo si no esta logueado, no lo se aun
  { path: '**', redirectTo: 'home' }  //lo mismo que arriba
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }