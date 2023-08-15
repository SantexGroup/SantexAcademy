import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizacionesRoutingModule } from './organizaciones-routing.module';
import { OrganizacionesComponent } from './organizaciones.component';


@NgModule({
  declarations: [
    OrganizacionesComponent
  ],
  imports: [
    CommonModule,
    OrganizacionesRoutingModule
  ]
})
export class OrganizacionesModule { }
