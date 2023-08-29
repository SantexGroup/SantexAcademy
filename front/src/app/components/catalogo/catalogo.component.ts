import { Component, OnInit } from '@angular/core';
import { Curso } from '../models/curso.model';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  cursos: Curso[] = [
    {
      id: '1',
      name: 'Microsoft SQL Server',
      price: 565,
      image: './assets/images/Curso1.jpg'
    },
    {
      id: '2',
      name: 'MySQL',
      price: 356,
      image: './assets/images/Curso2.jpg'
    },
    {
      id: '3',
      name: 'Microsoft Visual Studio',
      price: 23,
      image: './assets/images/Curso4.jpg'
    },
    {
      id: '4',
      name: 'Angular',
      price: 23,
      image: './assets/images/Curso5.jpg'
    },
    {
      id: '5',
      name: 'Microsoft SQL Server',
      price: 565,
      image: './assets/images/Curso1.jpg'
    },
    {
      id: '6',
      name: 'MySQL',
      price: 356,
      image: './assets/images/Curso2.jpg'
    },
    {
      id: '7',
      name: 'Microsoft Visual Studio',
      price: 23,
      image: './assets/images/Curso4.jpg'
    },
    {
      id: '8',
      name: 'Angular',
      price: 23,
      image: './assets/images/Curso5.jpg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
