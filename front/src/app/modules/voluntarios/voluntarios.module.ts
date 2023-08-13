import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoluntariosRoutingModule } from './voluntarios-routing.module';
import { VoluntariosComponent } from './voluntarios.component';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    VoluntariosComponent
  ],
  imports: [
    CommonModule,
    VoluntariosRoutingModule,
    CoreModule
  ]
})
export class VoluntariosModule { }
