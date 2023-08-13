import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-page',
  templateUrl: './header-page.component.html',
  styleUrls: ['./header-page.component.css']
})
export class HeaderPageComponent implements OnInit {
  /* propiedad que sirve para abrir y cerrar el boton */
  public active : boolean = false

  constructor() {
  }

  ngOnInit(): void {
   
  }
  /* este metodo nos sirve para activar y desactivar el menu hamaburgesa */
  activarNav() : void {
    this.active = !this.active
  }
}
