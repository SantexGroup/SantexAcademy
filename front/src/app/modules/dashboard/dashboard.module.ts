import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardVolunteerComponent } from './pages/dashboard-volunteer/dashboard-volunteer.component';
import { DashboardOrganizationComponent } from './pages/dashboard-organization/dashboard-organization.component';
import { HeaderComponent } from './components/dashboardVolunteer/header/header.component';
import { DataVolunteerComponent } from './components/dashboardVolunteer/data-volunteer/data-volunteer.component';
import { VolunteerHistoryComponent } from './components/dashboardVolunteer/volunteer-history/volunteer-history.component';
import { ModalQuestionComponent } from './components/modal-question/modal-question.component';
import { ModalStatusComponent } from './components/modal-status/modal-status.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    DashboardVolunteerComponent,
    DashboardOrganizationComponent,
    HeaderComponent,
    DataVolunteerComponent,
    VolunteerHistoryComponent,
    ModalQuestionComponent,
    ModalStatusComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}
