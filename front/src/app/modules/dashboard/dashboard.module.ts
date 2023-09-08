import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardVolunteerComponent } from './pages/dashboard-volunteer/dashboard-volunteer.component';
import { DashboardOrganizationComponent } from './pages/dashboard-organization/dashboard-organization.component';
import { HeaderComponent } from './components/header/header.component';
import { DataVolunteerComponent } from './components/data-volunteer/data-volunteer.component';
import { VolunteerHistoryComponent } from './components/volunteer-history/volunteer-history.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    DashboardVolunteerComponent,
    DashboardOrganizationComponent,
    HeaderComponent,
    DataVolunteerComponent,
    VolunteerHistoryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
  ],
})
export class DashboardModule {}
