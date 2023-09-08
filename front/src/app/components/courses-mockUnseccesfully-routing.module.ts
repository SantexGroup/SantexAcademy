import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockUnsuccessfullyComponent } from './courses/courses-mock/mock-unsuccessfully.component';

const routes: Routes = [
  {
    path: '',
    component: MockUnsuccessfullyComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CoursesMockUnseccesfullyModule { }
