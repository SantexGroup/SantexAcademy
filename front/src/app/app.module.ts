import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { register } from 'swiper/element/bundle';
register();

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeModule } from './modules/home/home.module';
import { authModule } from './modules/auth/auth.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, NotfoundComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, authModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
