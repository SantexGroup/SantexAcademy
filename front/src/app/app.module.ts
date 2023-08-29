import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { CarouselComponent } from './components/carousel/carousel.component';
=======
import { ErrorPageComponent } from './modules/share/error-page/error-page.component';
>>>>>>> crud_user_basic

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
<<<<<<< HEAD
    AppRoutingModule,
    HttpClientModule,
=======
    HttpClientModule,
    AppRoutingModule
>>>>>>> crud_user_basic
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
