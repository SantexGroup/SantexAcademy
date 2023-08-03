import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ],
  exports: [
    DashboardPageComponent
  ],
  providers: [],
})
export class DashboardModule {}
