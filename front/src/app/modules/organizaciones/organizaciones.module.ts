import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizacionesRoutingModule } from './organizaciones-routing.module';
import { OrganizacionesComponent } from './organizaciones.component';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardOrganizacionComponent } from './dashboard-organizacion/dashboard-organizacion.component';
import { DatosOrganizacionComponent } from './datos-organizacion/datos-organizacion.component';


@NgModule({
  declarations: [
    OrganizacionesComponent,
    DashboardOrganizacionComponent,
    DatosOrganizacionComponent
  ],
  imports: [
    CommonModule,
    OrganizacionesRoutingModule,
    CoreModule
  ]
})
export class OrganizacionesModule { }
