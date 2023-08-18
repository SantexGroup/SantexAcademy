import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { RegisterbuttonComponent } from '../register/registerbutton/registerbutton.component';
import { RegisterformComponent } from '../register/registerform/registerform.component';


@NgModule({
  declarations: [
    DashboardPageComponent,
    RegisterbuttonComponent,
    RegisterformComponent
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
