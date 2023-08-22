import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormInscrCoursesComponent } from './courses/form-inscr-courses/form-inscr-courses.component';

const routes: Routes = [
  {
    path: '',
    component: FormInscrCoursesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormInscrCoursesRoutingModule { }
