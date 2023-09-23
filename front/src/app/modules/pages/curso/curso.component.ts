import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';// BORRAR si no se usa

import { Curso } from '../../cursos/interface/cursos.interface';
import { Nivel } from "src/app/models/nivel.interface";
import { AuthService } from '../../auth/services/auth.service';
import { Matricula } from '../../matriculas/interfaces/interfaces';
import { MatriculasService } from '../../matriculas/services/matriculas.service';
// import { Curso } from '../../../models/curso.interface';//BORRAR si no se usa

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})

export class CursoComponent implements OnInit {
  @Input() cursos: Curso[] = [];
  //form:FormGroup;
  
  nivelNvo: Nivel = {
    nombre: 'Vacio',
    descripcion: 'Vacio',
  };
  

  get user() {
    return this.authService.user;
  }

  @Input() curso: Curso = {
    id: 0,
    nombre: '',
    descripcion: '',
    imagen: '',
    duracion: 0,
    capacidad: 0,
    idnivel: 1,
    requisitos:  '',
    habilitado: true,
    fechainicio: new Date,
    fechafin: new Date,
    idusuarioalta: 0,
    idusuariomodificacion: 1,
    createdAt: new Date,
    updatedAt: new Date,
    Nivel: this.nivelNvo,
    estado: '',
  }

  matricula: Matricula = {
  cursoId: 0,
  userId: 0,
  }

  constructor(private authService: AuthService,
              private matriculasService: MatriculasService,
              private router: Router) { }

  ngOnInit(): void {
    console.log(this.cursos)
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
      this.router.navigateByUrl('/auth/login');//ATENCION!!! /auth/login lleva a login viejo y roto
    }
    
  }

}
