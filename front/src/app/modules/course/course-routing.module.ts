import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './components/course/course.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';

const routes: Routes = [
  {
    path: '',    
    children: [
      {
        path: 'edit-course/:id',
        component: EditCourseComponent
      },
      {
        path: 'course-list',
        component: CourseListComponent,
      },
      {
        path: 'add-course',
        component: AddCourseComponent,
      },
      {
        path: ':id',
        component: CourseComponent,
      },
    ]
  }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
