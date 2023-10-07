import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/home-page/home-page.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DashboardPageComponent } from './modules/dashboard/dashboard-page/dashboard-page.component';
import { VolunteersComponent } from './pages/volunteers/volunteers.component';
import { OrganizationDetailsComponent } from './pages/organization-details/organization-details.component';
import { authGuard } from './guards/auth.guard';
import { VolunterIdComponent } from './pages/volunter-id/volunter-id.component';
import { ExchangeComponent } from './pages/exchange/exchange.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { StepsToVolunteerComponent } from './pages/steps-to-volunteer/steps-to-volunteer.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';

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
    path: 'voluntariado/:id',
    title: 'VolunTime - Voluntariado',
    component: VolunterIdComponent,
  },

  {
    path: 'organizacion',
    title: 'VolunTime',
    component: OrganizationDetailsComponent,
  },
  {
    path: 'exchange',
    title: 'VolunTime',
    component: ExchangeComponent,
  },
  {
    path: 'nosotros',
    title: 'VolunTime - Quienes Somos',
    component: AboutUsComponent,
  },
  {
    path: 'contacto',
    title: 'VolunTime - Contacto',
    component: ContactComponent,
  },
  {
    path: 'steps',
    title: 'VolunTime - Steps',
    component: StepsToVolunteerComponent,
  },
  {
    path: 'benefits',
    title: 'VolunTime - Steps',
    component: BenefitsComponent,
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
