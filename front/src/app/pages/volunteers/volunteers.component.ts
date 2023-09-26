import { Component } from '@angular/core';

type Item = {
  imgUrl: string;
  title: string;
  tag: string;
  location: string;
  time: string;
  timePublished: string;
};

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css'],
})
export class VolunteersComponent {
  dataInput: string = '';
  items: Item[] = [
    {
      imgUrl: '/assets/logotypes_organizations/orgOne.svg',
      title: 'Se necesitan tutores para apoyo escolar',
      tag: 'A DISTANCIA',
      location: 'Córdoba Capital',
      time: 'A Tiempo Parcial',
      timePublished: 'Publicado hace 1 minuto',
    },
  ];
  viewDataInput(e: any) {
    console.log(e.target.value);
  }
}
