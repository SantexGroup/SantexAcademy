import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayTransfCourseComponent } from './courses/pay-transf-course/pay-transf-course.component';
import { MockUnsuccessfullyComponent } from './courses/courses-mock/mock-unsuccessfully.component';
import { MockSuccessComponent } from './courses/courses-mock/mock-success.component';



const routes: Routes = [
  {
    path: '',
    component: PayTransfCourseComponent
  },
  {
    path: 'unseccessfully',
    component: MockUnsuccessfullyComponent
  },
  {
    path: 'success',
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
export class PayTransfCourseModule { }
