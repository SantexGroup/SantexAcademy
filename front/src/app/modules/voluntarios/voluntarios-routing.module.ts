import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoluntariosComponent } from './voluntarios.component';

const routes: Routes = [
  {
    path:'',
    component:VoluntariosComponent
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoluntariosRoutingModule { }
