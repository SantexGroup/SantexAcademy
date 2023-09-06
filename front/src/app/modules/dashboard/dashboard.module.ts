import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardVolunteerComponent } from './pages/dashboard-volunteer/dashboard-volunteer.component';
import { DashboardOrganizationComponent } from './pages/dashboard-organization/dashboard-organization.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    DashboardVolunteerComponent,
    DashboardOrganizationComponent,
    HeaderComponent,
  ],
  imports: [CommonModule],
})
export class DashboardModule {}
