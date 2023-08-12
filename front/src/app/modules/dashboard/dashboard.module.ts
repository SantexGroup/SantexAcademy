import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailComponent } from './courses/courses-detail/courses-detail.component';
import { PrimengModule } from 'src/app/lib/primeNG/primeng/primeng.module';


@NgModule({
  declarations: [ CoursesComponent, CoursesDetailComponent,],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PrimengModule
    
  ],
  exports: [
    CoursesComponent
  ],
  providers: [],
})
export class DashboardModule {}
