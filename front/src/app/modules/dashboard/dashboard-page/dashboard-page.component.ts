import { Component , OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
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
