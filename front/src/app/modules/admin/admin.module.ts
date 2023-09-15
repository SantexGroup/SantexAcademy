import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CoreModule } from 'src/app/core/core.module';
import { TareasComponent } from './tareas/tareas.component';
import { SharedModule } from '../shared/shared.module';
import { PremiosComponent } from './premios/premios.component';
import { CrearModificarPremioComponent } from './modales/crear-modificar-premio/crear-modificar-premio.component';


@NgModule({
  declarations: [
    AdminComponent,
    TareasComponent,
    PremiosComponent,
    CrearModificarPremioComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class AdminModule { }
