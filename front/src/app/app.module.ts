import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavbarComponent } from './component/navbar/navbar.component';
import { PruebaComponent } from './component/prueba/prueba.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BuyerRegistrationComponent } from './component/buyer-registration/buyer-registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BusquedaComponent } from './component/busqueda/busqueda.component';
import { Output, Input } from '@angular/core';
import { PantallaComponent } from './component/pantalla/pantalla.component';
import {MatMenuModule} from '@angular/material/menu';
import { MenuComponent } from './component/menu/menu.component';
import { Injectable } from '@angular/core';
import { AgregarProductoComponent } from './component/agregar-producto/agregar-producto.component';
import { AgregarProductoModalComponent } from './component/agregar-producto-modal/agregar-producto-modal.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog'; // Importa MatDialogModule
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { BotonLoginComponent } from './component/boton-login/boton-login.component';



//Rutas
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

// Servicios
import { MueblesService } from './service/muebles.service';
import { FormLoginComponent } from './component/form-login/form-login.component';



@NgModule({
  declarations: [
    AppComponent,
    BuyerRegistrationComponent,
    AgregarProductoComponent, 
    AgregarProductoModalComponent, FormLoginComponent, 
    

  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSlideToggleModule,
    NavbarComponent,  
    PruebaComponent, 
    MatMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BusquedaComponent,
    PantallaComponent,
    MenuComponent,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule,
    HttpClientModule,
    MatIconModule,
    BotonLoginComponent,
  ],
  providers: [MueblesService],

  bootstrap: [AppComponent]
})
export class AppModule { }

