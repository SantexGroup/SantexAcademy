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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CargaArticulosComponent } from './Features/carga-articulos/carga-articulos.component';
import { TarjetaArticuloComponent } from './Features/tarjeta-articulo/tarjeta-articulo.component';


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
    CargaArticulosComponent,
    TarjetaArticuloComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

