import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quienessomos',
  templateUrl: './quienessomos.component.html',
  styleUrls: ['./quienessomos.component.css']
})
export class QuienessomosComponent implements OnInit {
  teamMembers: any[] = [
    {
      name: 'Rony',
      role: 'Desarrollador Web',
      imageSrc: 'assets/images/team/1.jpg',
      profileLink: '/quienes-somos/1'
    },
    {
      name: 'Mariano',
      role: 'Desarrolladora Web',
      imageSrc: 'assets/images/team/2.jpg',
      profileLink: '/quienes-somos/2'
    },
    {
      name: 'Jorgelina',
      role: 'Diseñador Gráfico',
      imageSrc: 'assets/images/team/3.jpg',
      profileLink: '/quienes-somos/3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}

