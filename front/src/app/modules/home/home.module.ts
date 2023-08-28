import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import {MatButtonModule} from '@angular/material/button';
import { FooterPageComponent } from '../footer-page/footer-page.component';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    [MatButtonModule],
    
  ]
})

export class HomeModule { }
