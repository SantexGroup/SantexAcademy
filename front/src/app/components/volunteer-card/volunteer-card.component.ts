import { Component, Input, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer-card',
  templateUrl: './volunteer-card.component.html',
  styleUrls: ['./volunteer-card.component.css'],
})
export class VolunteerCardComponent implements OnInit {
  @Input() data: any = {};
  idOrganization: string = '';
  idVolunteering: string = '';
  nameVol: string = '';
  nameOrg: string = '';
  openModalQuestion: boolean = false;
  constructor(private datePipe: DatePipe, private router: Router) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  formatCreatedAtDate(dateString: string): string {
    const createdAtDate = new Date(dateString);
    const now = new Date();
    /*
      calcula la diferencia en milisegundos entre la fecha y la hora actual y la fecha de creación. 
      Esto te da la cantidad total de milisegundos que han pasado entre ambas fechas.
    */
    const diffInMilliseconds = now.getTime() - createdAtDate.getTime();
    /* 
      calcula la diferencia en días redondeando hacia abajo la cantidad de milisegundos en diffInMilliseconds. 
      dividiendo por la cantidad de milisegundos en un día (1000 milisegundos por segundo, 3600 segundos por hora, y 24 horas por día).
      */
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 3600 * 24));

    if (diffInDays === 0) {
      return 'Publicado hoy';
    } else if (diffInDays === 1) {
      return 'Publicado ayer';
    } else {
      return `Publicado el ${this.datePipe.transform(
        createdAtDate,
        'dd/MM/yyyy'
      )}`;
    }
  }

  handleApplication(
    idOrg: string,
    idVol: string,
    nameVol: string,
    nameOrg: string
  ) {
    this.idOrganization = idOrg;
    this.idVolunteering = idVol;
    this.nameVol = nameVol;
    this.nameOrg = nameOrg;

    this.openModalQuestion = !this.openModalQuestion;
  }

  closeModalApplication() {
    this.openModalQuestion = !this.openModalQuestion;
  }

  viewVolunteering(id: number) {
    this.router.navigateByUrl(`/voluntariado/${id}`);
  }
}