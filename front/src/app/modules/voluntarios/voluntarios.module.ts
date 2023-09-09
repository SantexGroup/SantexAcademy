import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoluntariosRoutingModule } from './voluntarios-routing.module';
import { VoluntariosComponent } from './voluntarios.component';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardVoluntarioComponent } from './dashboard-voluntario/dashboard-voluntario.component';
import { TareasVoluntarioComponent } from './tareas-voluntario/tareas-voluntario.component';
import { PremiosVoluntarioComponent } from './premios-voluntario/premios-voluntario.component';
import { DatosVoluntarioComponent } from './datos-voluntario/datos-voluntario.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    VoluntariosComponent,
    DashboardVoluntarioComponent,
    TareasVoluntarioComponent,
    PremiosVoluntarioComponent,
    DatosVoluntarioComponent,
  ],
  imports: [
    CommonModule,
    VoluntariosRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class VoluntariosModule { }
