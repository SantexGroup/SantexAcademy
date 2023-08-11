import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailComponent } from './courses/courses-detail/courses-detail.component';


@NgModule({
  declarations: [ CoursesComponent, CoursesDetailComponent,],
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
