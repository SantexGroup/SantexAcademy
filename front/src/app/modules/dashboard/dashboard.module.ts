import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { FormAddProductComponent } from './dashboard-page/form-add-product/form-add-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardPageComponent, FormAddProductComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardPageComponent
  ],
  providers: [],
})
export class DashboardModule {}
