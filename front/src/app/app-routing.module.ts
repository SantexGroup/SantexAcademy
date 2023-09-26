import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DashboardPageComponent } from './modules/dashboard/dashboard-page/dashboard-page.component';
import { VolunteersComponent } from './pages/volunteers/volunteers.component';
import { OrganizationDetailsComponent } from './pages/organization-details/organization-details.component';
import { authGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', title: 'VolunTime - Inicio', component: HomePageComponent },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.authModule),
  },
  {
    path: 'dashboard',
    title: 'VolunTime - Panel',
    component: DashboardPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'voluntariados',
    title: 'VolunTime - Voluntariados',
    component: VolunteersComponent,
  },

  {
    path: 'organizacion',
    title: 'VolunTime',
    component: OrganizationDetailsComponent,
  },

  {
    path: '**',
    title: 'VolunTime - Página no encontrada!',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
