import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAddProductComponent } from './form-add-product/form-add-product.component';



@NgModule({
  declarations: [
    FormAddProductComponent
  ],
  imports: [
    CommonModule,
    FormAddProductComponent
  ],
  exports: [

  ]
})
export class DashboardPageModule { }
