import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styleUrls: ['./search-nav.component.css']
})
export class SearchNavComponent implements OnInit {

  constructor() { }

  texto: string = ''; // Variable para el input
  opcionSeleccionada: string = 'opcion1'; // Variable para el dropdown

  ngOnInit(): void {
  }

  buscar() {
    // Aquí puedes implementar la lógica de búsqueda con los valores de 'texto' y 'opcionSeleccionada'
    console.log('Texto:', this.texto);
    console.log('Opción seleccionada:', this.opcionSeleccionada);
  }

}
