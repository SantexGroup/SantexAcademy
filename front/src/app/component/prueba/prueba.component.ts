import { Component, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from '../busqueda/busqueda.component';
import { MueblesService } from '../../service/muebles.service';

@Component({
  selector: 'app-prueba',
  standalone: true,
  imports: [CommonModule, BusquedaComponent],
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  constructor( ) { 
  }
  ngOnInit():  void {
    
  }

}
