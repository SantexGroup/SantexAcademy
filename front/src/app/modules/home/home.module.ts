import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SliderOrganizationsComponent } from './components/slider-organizations/slider-organizations.component';
import { CardsAgendahoursComponent } from './components/cards-agendahours/cards-agendahours.component';

@NgModule({
  declarations: [
    IntroductionComponent,
    HomePageComponent,
    SliderOrganizationsComponent,
    CardsAgendahoursComponent
  ],
  imports: [
    CommonModule,
  ],

})
export class HomeModule { }