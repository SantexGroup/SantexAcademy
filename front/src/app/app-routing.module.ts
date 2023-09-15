import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { ProfileGuard } from './guards/profile.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {

    path: 'all-courses',
    loadChildren: () => import('../app/components/all-courses-routing.module').then(m => m.AllCoursesRoutingModule)

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
    loadChildren: () => import('./components/pay-transf-course-routing.module').then(m => m.PayTransfCourseModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./components/courses-mockSuccess-routing.module').then(m => m.CoursesMockSuccessModule)
  },
  {
    path: 'unsuccessfully',
    loadChildren: () => import('./components/courses-mockUnseccesfully-routing.module').then(m => m.CoursesMockUnseccesfullyModule)
  },
  {
    path: 'profil/:id',
    canActivate: [ProfileGuard], // Aplica el guardia
    component: Error404Component,
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

