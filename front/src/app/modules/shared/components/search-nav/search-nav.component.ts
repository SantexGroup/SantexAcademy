import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.css']
})
export class SearchNavComponent implements OnInit {

  constructor() { }

  texto: string = ''; // Variable para el input
  opcionSeleccionada: 'ByName' | 'byProfesor' = 'ByName'; // Variable para el dropdown

  ngOnInit(): void {
  }

  buscar() {
    console.log('Texto:', this.texto);
    console.log('Opción seleccionada:', this.opcionSeleccionada);
  }

}
