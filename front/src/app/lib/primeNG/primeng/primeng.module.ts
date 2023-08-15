import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports: [
    ButtonModule,
    DividerModule,
    CarouselModule
  ]
})
export class PrimengModule { }
