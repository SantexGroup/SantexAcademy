import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ProfileRoutingModule } from './profile-routing.module';

import { ViewProfilePageComponent } from './view-profile-page/view-profile-page.component';

import { UserService } from 'src/app/core/services/user/user.service';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [ViewProfilePageComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    DashboardModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  providers: [UserService],
})
export class ProfileModule {}
