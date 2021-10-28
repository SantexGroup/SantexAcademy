import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewProfilePageComponent } from './view-profile-page/view-profile-page.component';

const routes: Routes = [
  {
    path: '',
    component: ViewProfilePageComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
