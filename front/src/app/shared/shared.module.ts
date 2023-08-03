import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../modules/material/material.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
