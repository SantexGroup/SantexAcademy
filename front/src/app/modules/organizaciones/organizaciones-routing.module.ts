import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizacionesComponent } from './organizaciones.component';
import { DashboardOrganizacionComponent } from './dashboard-organizacion/dashboard-organizacion.component';
import { DatosOrganizacionComponent } from './datos-organizacion/datos-organizacion.component';

const routes: Routes = [
  {
    path:'', 
  component:OrganizacionesComponent,
  children:[
    {
      path:'dashboard',
      component:DashboardOrganizacionComponent
    },
    {
      path:'datos',
      component:DatosOrganizacionComponent
    }
  ]
  },
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizacionesRoutingModule { }