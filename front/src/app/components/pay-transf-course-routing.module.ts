import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayTransfCourseComponent } from './courses/pay-transf-course/pay-transf-course.component';


const routes: Routes = [
  {
    path: '',
    component: PayTransfCourseComponent
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
