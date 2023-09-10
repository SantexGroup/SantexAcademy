import { Component, OnInit, Input } from '@angular/core';

import { Curso } from '../../cursos/interface/cursos.interface';
// import { Curso } from '../../../models/curso.interface';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  @Input() curso: Curso = {
    nombre: '',
    descripcion: '',
    imagen: '',
    duracion: 0,
    capacidad: 0,
    idnivel: null,
    requisitos:  '',
    habilitado: true,
    fechaInicio: new Date,
    fechafin: null,
    idusuarioalta: null,
    estado: true,
    idusuariomodificacion: null,
    createdAt: new Date,
    updatedAt: new Date,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
