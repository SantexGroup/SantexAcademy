import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BusquedaComponent } from '../busqueda/busqueda.component';
import { MenuComponent } from '../menu/menu.component';
import { AppModule } from 'src/app/app.module';
import { BotonLoginComponent } from '../boton-login/boton-login.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AppRoutingModule,MatToolbarModule,BotonLoginComponent, MatButtonModule, MatIconModule, BusquedaComponent, MenuComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})
export class NavbarComponent implements OnInit {
  
  constructor  () { }

 



  ngOnInit(): void {
  }

}
