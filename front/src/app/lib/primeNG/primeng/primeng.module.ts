import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports: [
    ButtonModule,
    DividerModule,
  ]
})
export class PrimengModule { }
