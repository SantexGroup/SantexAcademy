import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigupViewComponent } from './modules/sigup-view/sigup-view.component';
import { DescriptionCourseComponent } from './modules/description-course/description-course.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './modules/footer/footer.component';
import { AdminPanelComponent } from './modules/admin-panel/admin-panel.component';
import { EditCourseComponent } from './modules/admin-panel/courses/edit-course/edit-course.component';
import { AddCourseComponent } from './modules/admin-panel/courses/add-course/add-course.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AddCategoryComponent } from './modules/admin-panel/categories/add-category/add-category.component';
import { EditCategoryComponent } from './modules/admin-panel/categories/edit-category/edit-category.component';
import { AddScheduleComponent } from './modules/admin-panel/schedules/add-schedule/add-schedule.component';
import { EditScheduleComponent } from './modules/admin-panel/schedules/edit-schedule/edit-schedule.component';
import { CategoryComponent } from './modules/admin-panel/categories/category.component';
import { ScheduleComponent } from './modules/admin-panel/schedules/schedule.component';
import { CourseComponent } from './modules/admin-panel/courses/course.component';
import { LoginComponent } from './modules/login/login/login.component';
import { DashboardPageComponent } from './modules/dashboard/dashboard-page/dashboard-page.component';
import { InscriptionsComponent } from './modules/inscriptions/inscriptions.component';
import { CONTACTANOSComponent } from './modules/contactanos/contactanos.component';
import { ValidationEmailComponent } from './modules/validationsUsers/validation-email/validation-email.component';
import { CreateNewCodeComponent } from './modules/validationsUsers/create-new-code/create-new-code.component';
import { AboutUsComponent } from './modules/admin-panel/about-us/about-us.component';
import { AddAboutUsComponent } from './modules/admin-panel/about-us/add-about-us/add-about-us.component';
import { EditAboutUsComponent } from './modules/admin-panel/about-us/edit-about-us/edit-about-us.component';
import { ShowAboutUsComponent } from './modules/show-about-us/show-about-us.component';
import { AdminsComponent } from './modules/admin-panel/admins/admins.component';
import { CategoriesComponent } from './modules/description-course/categories/categories.component';


@NgModule({
  declarations: [
    SigupViewComponent,
    ValidationEmailComponent,
    CreateNewCodeComponent,
    DescriptionCourseComponent,
    NavbarComponent,
    HomePageComponent,
    FooterComponent,
    AppComponent,
    AdminPanelComponent,
    EditCourseComponent,
    AddCourseComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AddScheduleComponent,
    EditScheduleComponent,
    CategoryComponent,
    ScheduleComponent,
    CourseComponent,
    LoginComponent,
    DashboardPageComponent,
    InscriptionsComponent,
    CONTACTANOSComponent,
    AboutUsComponent,
    AddAboutUsComponent,
    EditAboutUsComponent,
    ShowAboutUsComponent,
    AdminsComponent,
    CategoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
     
  providers: [DatePipe],

  bootstrap: [AppComponent]
})
export class AppModule { }