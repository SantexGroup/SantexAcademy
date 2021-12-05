import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditProfilePageComponent } from './edit-profile-page/edit-profile-page.component';
import { ViewProfilePageComponent } from './view-profile-page/view-profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: ViewProfilePageComponent,
    children: []
  },
  {
    path: 'edit',
    component: EditProfilePageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
