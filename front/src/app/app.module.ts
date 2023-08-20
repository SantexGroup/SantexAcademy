import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeModule } from './modules/home/home.module';
import { logInModule } from './modules/logIn/logIn.module';

import { register } from 'swiper/element/bundle';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { FormlyModule } from '@ngx-formly/core';
// import { ReactiveFormsModule } from '@angular/forms';
// import { FormlyMaterialModule } from '@ngx-formly/material';
// register Swiper custom elements
register();

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, logInModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
