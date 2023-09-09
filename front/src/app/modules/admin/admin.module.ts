import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CoreModule } from 'src/app/core/core.module';
import { TareasComponent } from './tareas/tareas.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdminComponent,
    TareasComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class AdminModule { }
