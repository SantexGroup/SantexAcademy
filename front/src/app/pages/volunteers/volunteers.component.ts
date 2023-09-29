import { Component, OnInit } from '@angular/core';
import { VolunteeringService } from 'src/app/services/volunteering.service';

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
export class VolunteersComponent implements OnInit {
  dataInput: string = '';
  volunteering: Array<[]> = [];
  volunteeringFilter: Array<[]> = [];
  constructor(private volunteeringServices: VolunteeringService) {}
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

  ngOnInit(): void {
    this.volunteeringServices.getVolunteers().subscribe({
      next: (res) => {
        this.volunteering = res;
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  viewDataInput(e: any) {
    console.log(e.target.value);
  }
}
