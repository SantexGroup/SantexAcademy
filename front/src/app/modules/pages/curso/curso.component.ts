import { Component, OnInit, Input } from '@angular/core';

import { Curso } from '../../cursos/interface/cursos.interface';
<<<<<<< HEAD
import { Nivel } from "src/app/models/nivel.interface";
import { FormGroup } from '@angular/forms';
=======
import { AuthService } from '../../auth/services/auth.service';
import { Matricula } from '../../matriculas/interfaces/interfaces';
>>>>>>> juanjoDiaz
// import { Curso } from '../../../models/curso.interface';
import { MatriculasService } from '../../matriculas/services/matriculas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})

export class CursoComponent implements OnInit {
<<<<<<< HEAD
  //form:FormGroup;
  
  nivelNvo: Nivel = {
    nombre: 'Vacio',
    descripcion: 'Vacio',
  };
  
=======

  get user() {
    return this.authService.user;
  }

>>>>>>> juanjoDiaz
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
<<<<<<< HEAD
    fechainicio: new Date,
    fechafin: new Date,
    idusuarioalta: 0,
    idusuariomodificacion: 0,
    estado: '',
    createdAt: new Date,
    updatedAt: new Date,
    nivel: this.nivelNvo,
=======
    fechaInicio: new Date,
    fechafin: null,
    idusuarioalta: null,
    estado: true,
    idusuariomodificacion: null,
>>>>>>> juanjoDiaz
  }

  matricula: Matricula = {
  cursoId: 0,
  userId: 0,
  }

  constructor(private authService: AuthService,
              private matriculasService: MatriculasService,
              private router: Router) { }

  ngOnInit(): void {
  }

  inscribir(){
    if (this.user){
      this.matriculasService.addMatricula({
        cursoId: this.curso.id!,
        userId: this.user.id
      })
          .subscribe( matricula => {
            console.log('add :', matricula)
            this.router.navigateByUrl('/cursos/index')
          })
    }else{
      this.router.navigateByUrl('/auth/login');
    }
    
  }

}
