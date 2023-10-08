import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { UsersService } from '../../users/services/users.service';
import { User } from '../../users/interface/user.interface';
import { Curso } from '../../cursos/interface/cursos.interface';
import { CursosService } from '../../cursos/services/cursos.service';
import { Router } from '@angular/router';
import { Matricula } from '../../matriculas/interfaces/interfaces';
import { MatriculasService } from '../../matriculas/services/matriculas.service';
import { DocenteService } from '../../docentes/services/docente.service';
import { Docente } from '../../docentes/interfaces/docente';
import { DocenteporcursoService } from '../docentecurso/services/docenteporcurso.service';
import { Docenteporcurso } from '../docentecurso/interfaces/docenteporcurso';

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
  searchUser: string = '';
  usuariosFiltrados: any[] = [];
  totalUsuarios: number = 0;
  usuariosMostrados: number = 0;

  searchCurso: string = '';
  cursosFiltrados: any[] = [];
  totalCursos: number = 0;
  cursosMostrados: number = 0;

  searchMatricula: string = '';
  matriculasFiltradas: any[] = [];
  totalMatriculas: number = 0;
  matriculasMostradas: number = 0;

  searchDocente: string = '';
  docentesFiltrados: any[] = [];
  totalDocentes: number = 0;
  docentesMostrados: number = 0;

  searchDocentePorCurso: string = '';
  docentesFiltradosPorCurso: any[] = [];
  totalDocentesPorCurso: number = 0;
  docentesMostradosPorCurso: number = 0;
  
  docentes: Docente[] = [];
  docentesPorCurso: Docenteporcurso[] = [];

  constructor(
    private usersService: UsersService,
    private cursoService: CursosService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private matriculasService: MatriculasService,
    private docentesService: DocenteService,
    private docenteporcursoService: DocenteporcursoService
  ) {}

  ngOnInit(): void {
    console.log('Llamando a obtener todos los usuarios....');
    this.obtenerUsuarios();
    this.obtenerCursos();
    this.obtenerMatriculas(); //método para obtener matriculas en estado = 'A' para gestionar!
    this.obtenerDocentes();
    this.obtenerDocentesPorCurso();
  }

  obtenerDocentesPorCurso(){
    this.docenteporcursoService.getDocentesPorCurso().subscribe({
      next: (response) => {
        console.log(response);
        this.totalDocentesPorCurso = response.length;
        this.docentesMostradosPorCurso = this.totalDocentesPorCurso; 
        this.docentesPorCurso = response;
        this.docentesFiltradosPorCurso = this.docentesPorCurso;
      },
      error: (error) => {
        console.error(error);
        this.errorMensaje =
          'Ocurrió un error al obtener los docentes por curso. Por favor, inténtalo de nuevo más tarde.';
      },
    });
  }

  obtenerCursos(){
    this.cursoService.getCursos().subscribe({
      next: (response) => {
        console.log(response);
        this.totalCursos= response.length;
        this.cursosMostrados = this.totalCursos; // Al principio, todos los cursos se muestran
        this.cursos = response;
        this.cursosFiltrados = this.cursos;
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
        this.totalUsuarios = response.length;
        this.usuariosMostrados = this.totalUsuarios; // Al principio, todos los usuarios se muestran
        this.users = response;
        this.usuariosFiltrados = this.users;
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
        this.totalMatriculas = response.length;
        this.matriculasMostradas = this.totalMatriculas; 
        this.matriculas = response;
        this.matriculasFiltradas = this.matriculas;
      },
      error: (error) => {
        console.error(error);
        this.errorMensaje =
          'Ocurrió un error al obtener las matriculas. Por favor, inténtalo de nuevo más tarde.';
      },
    });
  }

  obtenerDocentes(){
    this.docentesService.getDocentes().subscribe({
      next: (response) => {
        console.log(response);
        this.totalDocentes = response.length;
        this.docentesMostrados = this.totalDocentes; 
        this.docentes = response;
        this.docentesFiltrados = this.docentes;
      },
      error: (error) => {
        console.error(error);
        this.errorMensaje =
          'Ocurrió un error al obtener los docentes. Por favor, inténtalo de nuevo más tarde.';
      },
    });
  }

  confirmarEliminarCurso(cursoId: number): void {
    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este curso?");
    if (confirmacion) {
      this.deleteCurso(cursoId);
    }
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

  confirmarEliminarUsuario(userId: number): void {
    const confirmacion = window.confirm("¿Estás seguro de que deseas eliminar este usuario?");
    if (confirmacion) {
      this.deleteUsuario(userId);
    }
  }
  

  confirmarActivarDesactivarUser(user: User, estahabilitado: boolean): void {
    const confirmacion = window.confirm("¿Estás seguro de que deseas activar/desactivar el usuario?");
    if (confirmacion) {
      this.activardesactivaruser(user, estahabilitado);
    }
  }

  confirmarActivarDesactivarCurso(curso: Curso, estahabilitado: boolean): void {
    const confirmacion = window.confirm("¿Estás seguro de que deseas activar/desactivar el curso?");
    if (confirmacion) {
      this.activardesactivar(curso, estahabilitado);
    }
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

  habilitarDocente(docente: Docente, estahabilitado: boolean) {
    console.log(docente);
    console.log(estahabilitado);
    docente.habilitado = estahabilitado; // Asignar el valor a la propiedad 'habilitado' del objeto 'docente' pasado como parámetro

    this.docentesService.habilitardocente(docente).subscribe((resp) => {
     this.obtenerDocentes();
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


  buscarDocentes() {

  }

  buscarDocentesPorCurso(){

  }
  
  buscarUsuariosPorNombre() {
    console.log("Click en buscar!!!!");
  
    if (this.searchUser.trim() === "") {
      // Si el filtro está "", muestro todos los usuarios
      this.usuariosFiltrados = this.users;
    } else {
      // Filtro los usuarios por apellido
      this.usuariosFiltrados = this.users.filter(user =>
        user.apellido.toLowerCase().includes(this.searchUser.toLowerCase())
      );
    }
  
    // Actualizo la cantidad de usuarios filtrados
    this.usuariosMostrados = this.usuariosFiltrados.length;
  }

  buscarCursosPorNombre() { 
    if (this.searchCurso.trim() === "") {
      // Si el filtro está "", muestro todos los cursos
      this.cursosFiltrados = this.cursos;
    } else {
      // Filtro los cursos por nombre
      this.cursosFiltrados = this.cursos.filter(curso =>
        curso?.nombre?.toLowerCase().includes(this.searchCurso.toLowerCase())
      );
    }
  
    // Actualizo la cantidad de cursos filtrados
    this.cursosMostrados = this.cursosFiltrados.length;
  }
  
  buscarMatriculasPorCurso() { 
    console.log("Click en buscar!!!!");
    if (this.searchMatricula.trim() === "") {
      this.matriculasFiltradas = this.matriculas;
    } else {
      this.matriculasFiltradas = this.matriculas.filter(matricula =>
        matricula.Curso?.nombre?.toLowerCase().includes(this.searchMatricula.toLowerCase())
      );
    }
  
    this.matriculasMostradas = this.matriculasFiltradas.length;
  }
}
