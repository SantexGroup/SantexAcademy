import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { CursosComponent } from './modules/pages/cursos/cursos.component';
import { PreciosComponent } from './modules/pages/precios/precios.component';
import { CarritoComponent } from './modules/pages/carrito/carrito.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'precios', component: PreciosComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  // ,
  // { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)}
  // },
  // {
  //   path: '**',
  //   redirectTo: 'dashboard'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
