import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SigupViewComponent} from './modules/sigup-view/sigup-view.component'
import { ValidationEmailComponent } from './modules/validationsUsers/validation-email/validation-email.component';
import { CreateNewCodeComponent } from './modules/validationsUsers/create-new-code/create-new-code.component';
import { DescriptionCourseComponent } from './modules/description-course/description-course.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { AdminPanelComponent } from './modules/admin-panel/admin-panel.component';
import { AddCourseComponent } from './modules/admin-panel/courses/add-course/add-course.component';
import { EditCourseComponent } from './modules/admin-panel/courses/edit-course/edit-course.component';
import { AddCategoryComponent } from './modules/admin-panel/categories/add-category/add-category.component';
import { CategoryComponent } from './modules/admin-panel/categories/category.component';
import { EditCategoryComponent } from './modules/admin-panel/categories/edit-category/edit-category.component';
import { ScheduleComponent } from './modules/admin-panel/schedules/schedule.component';
import { AddScheduleComponent } from './modules/admin-panel/schedules/add-schedule/add-schedule.component';
import { EditScheduleComponent } from './modules/admin-panel/schedules/edit-schedule/edit-schedule.component';
import { CourseComponent } from './modules/admin-panel/courses/course.component';
import { LoginComponent } from './modules/login/login/login.component';
import { InscriptionsComponent } from './modules/inscriptions/inscriptions.component';
import { CONTACTANOSComponent } from './modules/contactanos/contactanos.component';
import { ShowAboutUsComponent } from './modules/show-about-us/show-about-us.component';
import { AboutUsComponent } from './modules/admin-panel/about-us/about-us.component';
import { AddAboutUsComponent } from './modules/admin-panel/about-us/add-about-us/add-about-us.component';
import { EditAboutUsComponent } from './modules/admin-panel/about-us/edit-about-us/edit-about-us.component';
import { AdminsComponent } from './modules/admin-panel/admins/admins.component';
import { CategoriesComponent } from './modules/description-course/categories/categories.component';


const routes: Routes = [
  {
     path: '', component:HomePageComponent
  },
  {
    path: 'contactanos', component:CONTACTANOSComponent
  },
  {
    path:'admin/panel', component:AdminPanelComponent
  },
  {
    path:'admin/panel/courses', component:CourseComponent
  },
  {
    path:'admin/panel/courses/addCourse', component:AddCourseComponent
  },
  {
    path:'admin/panel/courses/editCourse/:id', component:EditCourseComponent
  },
  {
    path:'admin/panel/categories', component:CategoryComponent
  },
  {
    path:'admin/panel/categories/addCourseCategory', component:AddCategoryComponent
  },
  {
    path:'admin/panel/categories/editCourseCategory/:id', component:EditCategoryComponent
  },
  {
    path:'admin/panel/schedules', component:ScheduleComponent
  },
  {
    path:'admin/panel/schedules/addSchedule', component:AddScheduleComponent
  },
  {
    path:'admin/panel/schedules/editSchedule/:id', component:EditScheduleComponent
  },
  {
    path:'admin/panel/about-us', component:AboutUsComponent
  },
  {
    path:'admin/panel/about-us/addAbout', component:AddAboutUsComponent
  },
  {
    path:'admin/panel/about-us/editAbout/:id', component:EditAboutUsComponent
  },
  {
    path:'admin/panel/admins', component:AdminsComponent
  },
  {
    path: 'curso/:id',component:DescriptionCourseComponent
  },
  {
    path: 'categoria/:CategoryName', component:CategoriesComponent
  },
  {
    path:'profile',
    loadChildren : () => import('./modules/profile/profile.module').then(m => m.ProfileModule),
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'verificar-email/:email/:code',component:ValidationEmailComponent 
  },
  {
    path: 'crear-codigo',component:CreateNewCodeComponent 
  },
  {
    path: 'cursos/:id',component:DescriptionCourseComponent
  },
  {
    path: 'sobreNosotros', component:ShowAboutUsComponent,
  },
  {
    path: 'profile/inscripciones', component:InscriptionsComponent,
  },
  {
    path: 'signup',
    component: SigupViewComponent,
  }, 
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
