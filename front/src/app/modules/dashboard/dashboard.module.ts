import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RegisterbuttonComponent } from '../../components/register/registerbutton/registerbutton.component';
import { RegisterformComponent } from '../../components/register/registerform/registerform.component';
import { RegisteranswerComponent } from '../../components/register/registeranswer/registeranswer.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    RegisterbuttonComponent,
    RegisterformComponent,
    RegisteranswerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ],
  exports: [
    DashboardPageComponent
  ],
  providers: [],
})
export class DashboardModule {}
