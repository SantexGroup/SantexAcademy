import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoprincipalComponent } from './components/logoprincipal/logoprincipal.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './component/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoprincipalComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
