import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailComponent } from './courses/courses-detail/courses-detail.component';
import { PrimengModule } from 'src/app/lib/primeNG/primeng/primeng.module';
import { LandingCoursesComponent } from './courses/landing-courses/landing-courses.component';


@NgModule({
  declarations: [ CoursesComponent, CoursesDetailComponent, LandingCoursesComponent,],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimengModule,
    
  ],
  exports: [
    CoursesComponent,
    LandingCoursesComponent
  ],
  providers: [],
})
export class DashboardModule {}
