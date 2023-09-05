import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


/**
 * /          es para cualquiera sin loguear
 * /home      es para los que esten logueados
 * /login     para loguearse
 * /register  para registrarse
 * /user      para que el user vea sus datos
 * /news      noticias para algo... para otro sprint
 * /dashboard para que el admin vea dashboard (aca hay que ver si estan los endpoints de TODO para mostrar en tiempo real cosas como cantidad de: alumnos, cursos, profes, "precios", "ganancias?")
 * redirect   supongo que angular tendra algo para si esta logeado mande a "/home", y si no esta logueado mande a "/"

 */


const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule) },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule) },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  { path: 'news', loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule) },
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', redirectTo: '/', pathMatch: 'full' }, 
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }