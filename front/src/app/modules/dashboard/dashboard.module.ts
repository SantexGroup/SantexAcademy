import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RegisterbuttonComponent } from '../../components/register/registerbutton/registerbutton.component';
import { RegisterformComponent } from '../../components/register/registerform/registerform.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { RegisteranswerComponent } from '../../components/register/registeranswer/registeranswer.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    RegisterbuttonComponent,
    RegisterformComponent,
    RegisteranswerComponent
    HeaderComponent,
    NavComponent,
    FooterComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
  ],
  exports: [
    DashboardPageComponent
  ],
  providers: [],
})
export class DashboardModule {}
