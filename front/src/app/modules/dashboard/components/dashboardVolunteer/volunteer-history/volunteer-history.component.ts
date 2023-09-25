import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-volunteer-history',
  templateUrl: './volunteer-history.component.html',
  styleUrls: ['./volunteer-history.component.css'],
})
export class VolunteerHistoryComponent implements OnInit {
  datosTabla?: any[];
  ngOnInit(): void {
    this.datosTabla = [
      {
        nombre: 'Voluntario 1',
        ong: 'ONG A',
        rol: 'Voluntario',
        horasEstimadas: 10,
        estado: 'En Proceso',
      },
      {
        nombre: 'Voluntario 2',
        ong: 'ONG B',
        rol: 'Coordinador',
        horasEstimadas: 20,
        estado: 'En Proceso',
      },
      {
        nombre: 'Voluntario 2',
        ong: 'ONG B',
        rol: 'Coordinador',
        horasEstimadas: 20,
        estado: 'Cancelado',
      },
      {
        nombre: 'Voluntario 2',
        ong: 'ONG B',
        rol: 'Coordinador',
        horasEstimadas: 20,
        estado: 'Finalizado',
      },
      {
        nombre: 'Voluntario 2',
        ong: 'ONG B',
        rol: 'Coordinador',
        horasEstimadas: 20,
        estado: 'Cancelado',
      },
      {
        nombre: 'Voluntario 2',
        ong: 'ONG B',
        rol: 'Coordinador',
        horasEstimadas: 20,
        estado: 'Finalizado',
      },
      {
        nombre: 'Voluntario 2',
        ong: 'ONG B',
        rol: 'Coordinador',
        horasEstimadas: 20,
        estado: 'Finalizado',
      },
    ];
  }
}
