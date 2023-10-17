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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CargaArticulosComponent } from './Features/carga-articulos/carga-articulos.component';
import { TarjetaArticuloComponent } from './Features/tarjeta-articulo/tarjeta-articulo.component';
import { VistaArtIndComponent } from './Features/vista-articulo-ind/vista-articulo-ind.component';
import { BarraLateralComponent } from './Shared/barra-lateral/barra-lateral.component';
import { ModificarArticuloComponent } from './Features/modificar-articulo/modificar-articulo.component';
import { DatosUsuarioComponent } from './Features/datos-usuario/datos-usuario.component';
import { HistorialVentasComponent } from './Features/historial-ventas/historial-ventas.component';
import { HistorialCompradorComponent } from './Features/historial-comprador/historial-comprador.component';
import { VistaPorTextoComponent } from './Features/vista-por-texto/vista-por-texto.component';
import { CategoriasComponent } from './Features/categorias/categorias.component';
import { EditarUsuarioComponent } from './Features/editar-usuario/editar-usuario.component';
import { BotonNavegacionComponent } from './Shared/boton-navegacion/boton-navegacion.component';
import { HistorialContratacionesComponent } from './Features/historial-contrataciones/historial-contrataciones';


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
    VistaArtIndComponent,
    ModificarArticuloComponent,
    DatosUsuarioComponent,
    HistorialVentasComponent,
    ModificarArticuloComponent,
    BarraLateralComponent,
    HistorialCompradorComponent,
    VistaPorTextoComponent,
    CategoriasComponent,
    EditarUsuarioComponent,
    BotonNavegacionComponent,
    HistorialContratacionesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

