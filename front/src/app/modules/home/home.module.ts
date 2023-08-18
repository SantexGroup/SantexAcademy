import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SliderOrganizationsComponent } from './components/slider-organizations/slider-organizations.component';
import { CardsAgendahoursComponent } from './components/cards-agendahours/cards-agendahours.component';
import { VolunteeringSearchComponent } from './components/volunteering-search/volunteering-search.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

@NgModule({
  declarations: [
    IntroductionComponent,
    HomePageComponent,
    SliderOrganizationsComponent,
    CardsAgendahoursComponent,
    VolunteeringSearchComponent,
    TestimonialsComponent,
  ],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
