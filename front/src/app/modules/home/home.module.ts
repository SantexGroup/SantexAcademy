import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SliderOrganizationsComponent } from './components/slider-organizations/slider-organizations.component';
import { CardsAgendahoursComponent } from './components/cards-agendahours/cards-agendahours.component';
import { VolunteeringSearchComponent } from './components/volunteering-search/volunteering-search.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { HeroComponent } from './components/hero/hero.component';
import { RouterModule } from '@angular/router';
import { SliderExchangeComponent } from './components/slider-exchange/slider-exchange.component';
import { RegisterLoginExchangeModalComponent } from './components/register-login-exchange-modal/register-login-exchange-modal.component';

@NgModule({
  declarations: [
    HeroComponent,
    IntroductionComponent,
    HomePageComponent,
    SliderOrganizationsComponent,
    CardsAgendahoursComponent,
    VolunteeringSearchComponent,
    TestimonialsComponent,
    WhatsappButtonComponent,
    SliderExchangeComponent,
    RegisterLoginExchangeModalComponent,
  ],
  imports: [CommonModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
