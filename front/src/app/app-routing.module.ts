import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './modules/admin-panel/admin-panel.component';
import { AddCourseComponent } from './modules/admin-panel/add-course/add-course.component';
import { EditCourseComponent } from './modules/admin-panel/edit-course/edit-course.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path:'admin/panel', component:AdminPanelComponent
  },
  {
    path:'admin/panel/add', component:AddCourseComponent
  },
  {
    path:'admin/panel/edit/:id', component:EditCourseComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
