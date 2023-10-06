import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../../services/organization.service';
import { Store } from '@ngrx/store';
import { selectToken } from 'src/app/core/auth.selectors';

@Component({
  selector: 'app-completed-volunteering',
  templateUrl: './completed-volunteering.component.html',
  styleUrls: ['./completed-volunteering.component.css'],
})
export class CompletedVolunteeringComponent implements OnInit {
  datosTabla?: any[];
  constructor(private orgServices: OrganizationService, private store: Store) {}
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
    this.getVolunteeringsFinish();
  }
  editarDato(dato: any) {
    // Lógica para editar el dato, por ejemplo, abrir un formulario de edición
  }

  eliminarDato(dato: any) {
    // Lógica para eliminar el dato, por ejemplo, mostrar un cuadro de diálogo de confirmación
  }

  getVolunteeringsFinish() {
    this.store.select(selectToken).subscribe((token) => {
      if (token) {
        this.orgServices.getVolunteeringsCompleted(token).subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
  }
}
