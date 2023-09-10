import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule }from '@angular/platform-browser/animations'
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';
import { MockUnsuccessfullyComponent } from './components/courses/courses-mock/mock-unsuccessfully.component';
import { MockSuccessComponent } from './components/courses/courses-mock/mock-success.component';


@NgModule({
  declarations: [
    AppComponent,
    MockUnsuccessfullyComponent,
    MockSuccessComponent,    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
