import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-courses',
  templateUrl: './students-courses.component.html',
  styleUrls: ['./students-courses.component.css']
})
export class StudentsCoursesComponent implements OnInit {

  cursos = [
    {
    "id": 1234,
    "nombre": "Uñas Soft Gel",
    "fechaInicio": "2023-10-25",
    "duracion": "10 días",
    "precio": "$3000",
    "descripcion": "Descripción del Curso 1",
    "img": "assets/img/curso-softGel.jpg"
  },
  {
    "id": 23,
    "nombre": "Curso 2",
    "fechaInicio": "2023-10-29",
    "duracion": "14 dias",
    "precio": "$3500",
    "descripcion": "Podras aprender a sublimar distintos productos como gooras, tazas, llaveros, entre otros!",
    "img": "assets/img/curso-sublimacion.jpg"
  },
  {
    "id": 34,
    "nombre": "Taller de Slime para Niños",
    "fechaInicio": "2023-11-03",
    "duracion": "1 día",
    "precio": "$1500",
    "descripcion": "Modalidad presencial",
    "img": "assets/img/taller-slime.jpg"
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
