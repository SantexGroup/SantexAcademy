import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionCourseComponent } from './modules/description-course/description-course.component';

const routes: Routes = [
/*   {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  }, */
  {
    path: '**',
    redirectTo: 'dashboard'
  },
  {
    path: 'curso/:id',component:DescriptionCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
