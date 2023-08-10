import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  declarations: [ CursosComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    
  ],
  exports: [
    CursosComponent
  ],
  providers: [],
})
export class DashboardModule {}
