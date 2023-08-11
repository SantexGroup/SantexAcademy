import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SliderOrganizationsComponent } from './components/slider-organizations/slider-organizations.component';

@NgModule({
  declarations: [
    IntroductionComponent,
    HomePageComponent,
    SliderOrganizationsComponent
  ],
  imports: [
    CommonModule,
  ],

})
export class HomeModule { }