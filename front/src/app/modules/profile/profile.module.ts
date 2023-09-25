import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule
  ],
  exports: [
    MyProfileComponent
  ]
})
export class ProfileModule { }
