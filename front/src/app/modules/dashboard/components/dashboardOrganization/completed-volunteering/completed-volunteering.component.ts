import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-completed-volunteering',
  templateUrl: './completed-volunteering.component.html',
  styleUrls: ['./completed-volunteering.component.css']
})
export class CompletedVolunteeringComponent implements OnInit {
  datosTabla?: any[];

  ngOnInit(): void {
    this.datosTabla = [
      {
        name: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec tristique',
        modality: 'Presencial',
        time: 'A tiempo parcial',
        location: 'Córdoba',
        rewards: '10',
        action: '',
      },
    ];

  }
  editarDato(dato: any) {
    // Lógica para editar el dato, por ejemplo, abrir un formulario de edición
  }

  eliminarDato(dato: any) {
    // Lógica para eliminar el dato, por ejemplo, mostrar un cuadro de diálogo de confirmación
  }
}

