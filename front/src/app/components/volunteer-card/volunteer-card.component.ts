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
  afterApplication: boolean = false;
  statusModalApplication: string = '';
  messageModalApplication: string = '';

  constructor(private datePipe: DatePipe, private router: Router) {}

  ngOnInit(): void {}

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

  onModalQuestionAftertApplication(status: string) {
    if (status === 'success') {
      this.statusModalApplication = 'success';
      this.messageModalApplication =
        '¡Felicidades! Tu solicitud para participar en el voluntariado ha sido exitosa. Agradecemos tu interés en ser parte de nuestro equipo y contribuir a nuestra causa. Pronto te contactaremos con más detalles sobre tu participación en este voluntariado. Mientras tanto, puedes explorar más oportunidades de voluntariado o visitar tu panel de control para ver el estado de tus postulaciones.';
      this.afterApplication = true;
    } else {
      this.statusModalApplication = 'failed';

      this.messageModalApplication =
        'Lamentablemente, la solicitud para el voluntariado no se pudo procesar en este momento. Por favor, inténtalo nuevamente más tarde o ponte en contacto con nosotros para obtener asistencia.';
      this.afterApplication = true;
    }
  }

  continueViewing() {
    this.afterApplication = false;
  }

  viewVolunteering(id: number) {
    this.router.navigateByUrl(`/voluntariado/${id}`);
  }
}
