import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewDogPageComponent } from './new-dog-page/new-dog-page.component';

const routes: Routes = [
  {
    path: '',
    component: NewDogPageComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DogRoutingModule {}
