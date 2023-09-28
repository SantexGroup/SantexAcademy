import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './components/course/course.component';


@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule
  ]
})
export class CourseModule { }
