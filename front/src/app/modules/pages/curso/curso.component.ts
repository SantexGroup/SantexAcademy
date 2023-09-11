import { Component, OnInit, Input } from '@angular/core';

import { Curso } from '../../cursos/interface/cursos.interface';
import { Nivel } from "src/app/models/nivel.interface";
import { FormGroup } from '@angular/forms';
// import { Curso } from '../../../models/curso.interface';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})

export class CursoComponent implements OnInit {
  //form:FormGroup;
  
  nivelNvo: Nivel = {
    nombre: 'Vacio',
    descripcion: 'Vacio',
  };
  
  @Input() curso: Curso = {
    id: 0,
    nombre: '',
    descripcion: '',
    imagen: '',
    duracion: 0,
    capacidad: 0,
    idnivel: 0,
    requisitos:  '',
    habilitado: true,
    fechainicio: new Date,
    fechafin: new Date,
    idusuarioalta: 0,
    idusuariomodificacion: 0,
    estado: '',
    createdAt: new Date,
    updatedAt: new Date,
    nivel: this.nivelNvo,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
