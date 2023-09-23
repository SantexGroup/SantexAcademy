import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UsersService } from '../../users/services/users.service';
import { User } from '../../users/interface/user.interface';
import { Curso } from '../../cursos/interface/cursos.interface';
import { CursosService } from '../../cursos/services/cursos.service';
import { Router } from '@angular/router';
import { Matricula } from '../../matriculas/interfaces/interfaces';
import { MatriculasService } from '../../matriculas/services/matriculas.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  users: User[] = [];
  cursos: Curso[] = [];
  errorMensaje: string | undefined;
  curso!: Curso;
  matriculas: Matricula[] = [];

  constructor(
    private usersService: UsersService,
    private cursoService: CursosService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private matriculasService: MatriculasService
  ) {}

  ngOnInit(): void {
    console.log('Llamando a obtener todos los usuarios....');
    this.obtenerUsuarios();
    this.obtenerCursos();
    this.obtenerMatriculas(); //método para obtener matriculas en estado = 'A' para gestionar!
  }

  obtenerCursos(){
    this.cursoService.getCursos().subscribe({
      next: (response) => {
        console.log(response);
        this.cursos = response; 
      },
      error: (error) => {
        console.error(error);
        this.errorMensaje =
          'Ocurrió un error al obtener los cursos. Por favor, inténtalo de nuevo más tarde.';
      },
    });
  }

  obtenerUsuarios(){
    this.usersService.getUsers().subscribe({
      next: (response) => {
        console.log(response);
        this.users = response; 
      },
      error: (error) => {
        console.error(error);
        this.errorMensaje =
          'Ocurrió un error al obtener los usuarios. Por favor, inténtalo de nuevo más tarde.';
      },
    });
  }

  obtenerMatriculas(){
    this.matriculasService.getMatriculas().subscribe({
      next: (response) => {
        console.log(response);
        this.matriculas = response; 
      },
      error: (error) => {
        console.error(error);
        this.errorMensaje =
          'Ocurrió un error al obtener las matriculas. Por favor, inténtalo de nuevo más tarde.';
      },
    });
  }

  deleteCurso(curso: number) {
    console.log("Llamando al eliminar");
    this.cursoService.deleteCurso(curso).subscribe((resp) => {
      this.obtenerCursos();
    });
  }

  deleteUsuario(user: number) {
    console.log("Usuario a eliminar:", user)
    this.usersService.deleteUser(user).subscribe((resp) => {
      this.obtenerUsuarios();
    });
  }

  activardesactivaruser(user: User, estahabilitado: boolean) {
    console.log(user);
    console.log(estahabilitado);
    user.activoactualmente = estahabilitado; // Asignar el valor a la propiedad 'habilitado' del objeto 'user' pasado como parámetro

    this.usersService.activardesactivar(user).subscribe((resp) => {
     this.obtenerUsuarios();
    });
  }

  habilitarMatricula(matricula: Matricula, estahabilitado: boolean) {
    console.log(matricula);
    console.log(estahabilitado);
    matricula.habilitado = estahabilitado; // Asignar el valor a la propiedad 'habilitado' del objeto 'user' pasado como parámetro

    this.matriculasService.habilitarmatricula(matricula).subscribe((resp) => {
     this.obtenerMatriculas();
    });
  }
  
  activardesactivar(curso: Curso, estahabilitado: boolean) {
    console.log(curso);
    console.log(estahabilitado);
    curso.habilitado = estahabilitado; // Asignar el valor a la propiedad 'habilitado' del objeto 'curso' pasado como parámetro

    this.cursoService.activardesactivar(curso).subscribe((resp) => {
     this.obtenerCursos();
    });
  }
}
