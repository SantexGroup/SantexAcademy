import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { AccordionModule } from 'primeng/accordion';
import {CarouselModule} from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { TreeSelectModule } from 'primeng/treeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
  ],
  exports: [
    ButtonModule,
    DividerModule,
    AccordionModule,
    CarouselModule,
    InputTextModule,
    InputMaskModule,
    TreeSelectModule,
    CheckboxModule,
    RadioButtonModule,DialogModule
  ]
})
export class PrimengModule { }
