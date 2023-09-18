import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
  ]
})
export class ShareModule { }

