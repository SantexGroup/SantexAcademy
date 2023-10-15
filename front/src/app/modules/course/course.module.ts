import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './components/course/course.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { FormsModule } from '@angular/forms';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';


@NgModule({
  declarations: [
    CourseComponent,
    CourseListComponent,
    AddCourseComponent,
    EditCourseComponent,
    MyCoursesComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class CourseModule { }
