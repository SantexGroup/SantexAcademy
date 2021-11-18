import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetListPageComponent } from './pet-list-page/pet-list-page.component';
import { PetRegisterPageComponent } from './pet-register-page/pet-register-page.component';

const routes: Routes = [
  { path: '', component: PetListPageComponent},
  { path: 'list', component: PetListPageComponent },
  { path: 'register', component: PetRegisterPageComponent},
  { path: '**', redirectTo: 'list' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
