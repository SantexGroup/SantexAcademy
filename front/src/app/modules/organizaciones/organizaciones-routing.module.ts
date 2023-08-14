import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizacionesComponent } from './organizaciones.component';

const routes: Routes = [
  {path:'', component:OrganizacionesComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizacionesRoutingModule { }
