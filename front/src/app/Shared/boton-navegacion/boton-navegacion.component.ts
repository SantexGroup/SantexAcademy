import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-boton-navegacion',
  templateUrl: './boton-navegacion.component.html',
  styleUrls: ['./boton-navegacion.component.css']
})
export class BotonNavegacionComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  redireccion() {
    this.location.back();
  }
}
