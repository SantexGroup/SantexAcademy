import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports: [
    ButtonModule,
    AccordionModule,
  ]
})
export class PrimengModule { }
