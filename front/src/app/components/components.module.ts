import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailComponent } from './courses/courses-detail/courses-detail.component';
import { PrimengModule } from 'src/app/lib/primeNG/primeng/primeng.module';
import { LandingCoursesComponent } from './courses/landing-courses/landing-courses.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { CompaniesComponent } from './companies/companies.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { EventsComponent } from './events/events.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RecordComponent } from './record/record.component';
import { FormInscCourseComponent } from './courses/form-insc-course/form-insc-course.component';
import { PayTransfCourseComponent } from './courses/pay-transf-course/pay-transf-course.component';
import { PrimeflexModule } from '../lib/primeFlex/primeflex/primeflex.module';
import { ComponentsRoutingModule } from './components-routing.module';
import { AllCoursesComponent } from './courses/all-courses/all-courses.component';


@NgModule({
  declarations: [ CoursesComponent, CoursesDetailComponent, LandingCoursesComponent, HeaderComponent, HomeComponent, FooterComponent, BannerComponent, CompaniesComponent, TestimonialsComponent, EventsComponent, AdvertisementsComponent, ContactComponent, LoginComponent, RecordComponent, FormInscCourseComponent, PayTransfCourseComponent, AllCoursesComponent,],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    PrimengModule,
    PrimeflexModule
    
  ],
  exports: [
    CoursesComponent,
    LandingCoursesComponent
  ],
  providers: [],
})
export class ComponentsModule {}
