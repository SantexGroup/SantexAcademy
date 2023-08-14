import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyPageComponent } from './modules/body-page/body-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import { FooterPageComponent } from './modules/footer-page/footer-page.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HeaderPageComponent } from './modules/header-page/header-page.component';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    BodyPageComponent,
    FooterPageComponent,
    HeaderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    UsuarioModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent,BodyPageComponent]
})
export class AppModule { }
