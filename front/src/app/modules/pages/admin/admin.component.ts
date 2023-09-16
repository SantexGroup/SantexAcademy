import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UsersService } from '../../users/services/users.service';
import { User } from '../../users/interface/user.interface';
import { Curso } from '../../cursos/interface/cursos.interface';
import { CursosService } from '../../cursos/services/cursos.service';
import { Router } from '@angular/router';

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

  constructor(
    private usersService: UsersService,
    private cursoService: CursosService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('Llamando a obtener todos los usuarios....');
    this.obtenerUsuarios();
    this.obtenerCursos();
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

  activardesactivar(curso: Curso, estahabilitado: boolean) {
    console.log(curso);
    console.log(estahabilitado);
    curso.habilitado = estahabilitado; // Asignar el valor a la propiedad 'habilitado' del objeto 'curso' pasado como parámetro

    this.cursoService.activardesactivar(curso).subscribe((resp) => {
     this.obtenerCursos();
    });
  }
}
