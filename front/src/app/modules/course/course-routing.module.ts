import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { AddCourseComponent } from './components/add-course/add-course.component';

const routes: Routes = [
  {
    path: '',    
    children: [
      {
        path: 'course-list',
        component: CourseListComponent,
      },
      {
        path: 'add-course',
        component: AddCourseComponent,
      },
    ]
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
