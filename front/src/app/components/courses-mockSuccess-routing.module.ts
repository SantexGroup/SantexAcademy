import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MockSuccessComponent } from './courses/courses-mock/mock-success.component';

const routes: Routes = [
  {
    path: '',
    component: MockSuccessComponent
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
export class CoursesMockSuccessModule { }
