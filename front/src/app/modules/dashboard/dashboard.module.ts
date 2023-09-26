import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

import { MatTabsModule } from '@angular/material/tabs';

import { ReactiveFormsModule } from '@angular/forms';


import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { DashboardVolunteerComponent } from './pages/dashboard-volunteer/dashboard-volunteer.component';
import { DashboardOrganizationComponent } from './pages/dashboard-organization/dashboard-organization.component';
import { HeaderComponent } from './components/dashboardVolunteer/header/header.component';
import { DataVolunteerComponent } from './components/dashboardVolunteer/data-volunteer/data-volunteer.component';
import { VolunteerHistoryComponent } from './components/dashboardVolunteer/volunteer-history/volunteer-history.component';

import { HeaderDashboardOrgComponent } from './components/dashboardOrganization/headerOrg/header/header-dashboard-org/header-dashboard-org.component';
import { VolunteersTableComponent } from './components/dashboardOrganization/volunteers-table/volunteers-table.component';
import { TabsComponent } from './components/dashboardOrganization/tabs/tabs.component';


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

    HeaderDashboardOrgComponent,
    VolunteersTableComponent,
    TabsComponent,
    

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
    MatTabsModule,
    ReactiveFormsModule,

  ],
})
export class DashboardModule {}
