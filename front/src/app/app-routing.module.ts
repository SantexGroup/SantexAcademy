import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },

  {

    path: 'courses/:id',
    loadChildren: () => import('../app/components/components.module').then(m => m.ComponentsModule)

  },
  {
    path: 'form-inscr-courses/:id',
    loadChildren: () => import('../app/components/form-inscr-courses-routing.module').then(m => m.FormInscrCoursesRoutingModule)
  },
  {
    path: 'pay-transf-course',
    loadChildren: () => import('../app/components/pay-transf-course.module').then(m => m.PayTransfCourseModule)
  },

  {

    path: 'all-courses',
    loadChildren: () => import('../app/components/all-courses-routing.module').then(m => m.AllCoursesRoutingModule)

  },

  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

