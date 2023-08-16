import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './Shared/barra/barra.component';
import { HomePageComponent } from './Features/home-page/home-page.component';
import { LoginComponent } from './Shared/login/login.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { BannerComponent } from './Features/banner/banner.component';
import { BasesComponent } from './Features/bases/bases.component';
import { RegistroComponent } from './Features/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent, 
    BarraComponent,
    HomePageComponent,
    LoginComponent,
    FooterComponent,
    BannerComponent,
    BasesComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

