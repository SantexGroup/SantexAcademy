import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './lib/primeNG/primeng/primeng.module';
import { PrimeflexModule } from './lib/primeFlex/primeflex/primeflex.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    PrimeflexModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
