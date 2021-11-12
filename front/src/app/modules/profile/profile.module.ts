import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';

import { MaterialModule } from '../shared/material.module';

import { UserService } from 'src/app/core/services/user/user.service';
import { ViewProfilePageComponent } from './view-profile-page/view-profile-page.component';

@NgModule({
  declarations: [ViewProfilePageComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule
  ],
  providers: [UserService],
})
export class ProfileModule {}
