import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PruebaComponent } from '../prueba/prueba.component';
import { MueblesService } from 'src/app/service/muebles.service';

@Component({
  selector: 'app-pantalla',
  standalone: true,
  imports: [CommonModule, PruebaComponent],
  templateUrl: './pantalla.component.html',
  styleUrls: ['./pantalla.component.css']
})
export class PantallaComponent implements OnInit {

  constructor(public muebleService: MueblesService) { }

  ngOnInit() {
  }

}
