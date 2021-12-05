import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';

import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';

import { UserService } from 'src/app/core/services/user/user.service';
import { ViewProfilePageComponent } from './view-profile-page/view-profile-page.component';
import { EditProfilePageComponent } from './edit-profile-page/edit-profile-page.component';

@NgModule({
  declarations: [ViewProfilePageComponent, EditProfilePageComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MaterialModule,
    SharedModule
  ],
  providers: [UserService],
})
export class ProfileModule {}
