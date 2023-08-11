import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { CoursesComponent } from './courses/courses.component';


@NgModule({
  declarations: [ CoursesComponent,],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    
  ],
  exports: [
    CoursesComponent
  ],
  providers: [],
})
export class DashboardModule {}
