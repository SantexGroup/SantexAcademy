import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyPageComponent } from './modules/body-page/body-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,BodyPageComponent]
})
export class AppModule { }
