import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../auth/services/auth.service';
import { Nivel } from 'src/app/models/nivel.interface';// En serio?!
import { UsersService } from '../../users/services/users.service';
import { Matricula } from '../../matriculas/interfaces/interfaces';
import { Docenteporcurso } from '../docentecurso/interfaces/docenteporcurso';
import { DocenteporcursoService } from '../docentecurso/services/docenteporcurso.service';
import { DocenteService } from '../../docentes/services/docente.service';
import { Curso } from '../../cursos/interface/cursos.interface';
import { MatriculasService } from '../../matriculas/services/matriculas.service';

// interface Curso extends Matricula, Docenteporcurso {
//   id?: number;
//   nombre: string;
//   descripcion: string;
//   imagen?: string;
//   duracion: number;
//   capacidad: number;
//   idnivel: number;
//   requisitos: string;
//   habilitado: boolean;
//   fechainicio: Date;
//   fechafin?: Date;
//   idusuarioalta: number;
//   idusuariomodificacion?: number;
//   estado: string;
//   createdAt: Date;
//   updatedAt?: Date;
//   Nivel?: Nivel; 
// }

@Component({
    selector: 'app-mis-cursos',
    templateUrl: './mis-cursos.component.html',
    styleUrls: ['./mis-cursos.component.css']
  })

  export class MisCursosComponent implements OnInit {

  get user() {
    return this.authService.user;
  }

  cursos: Curso[] = [];
  //matriculas: Matricula[] = [];
  cursosPorDocente: Docenteporcurso[] = [];

  constructor(private authService: AuthService,
              private usersService: UsersService,
              private router: Router,
              private docenteporcursoService: DocenteporcursoService,
              private docenteService:DocenteService,
              private matriculasService: MatriculasService,
             ) { }


  ngOnInit(): void {
    this.authService.validarToken().subscribe((ok) => {
      if (!ok) {
        Swal.fire('No estás logueado');
                    
      } else {
        console.log('1.- Usuario autenticado. ID de usuario:', this.user.id);
        if (this.user.tipoDeUsuario === 'Alumno') {
          console.log('2.- Tipo de usuario Alumno?:', this.user.tipoDeUsuario);
          this.usersService.getCursosPorUserId(this.user.id).subscribe((cursos) => {
            console.log('Respuesta de getCursosPorUserId:', cursos);
            console.log('B1.- This.user trae this.cursos:', this.cursos);
            this.cursos = cursos;
          
            this.matriculasService.getMatriculaByUserId(this.user.id).subscribe((matriculas) => {
              console.log('Respuesta de getMatriculaByUserId:', matriculas);
              console.log('B2.- This.user trae matriculas:', matriculas);
              
              // Crear arrays para cursos habilitados y no habilitados
              const cursosHabilitados: Curso[] = [];
              const cursosNoHabilitados: Curso[] = [];
          
              this.cursos.forEach((curso) => {
                console.log('Valor de curso.id:', curso);
              
                const matricula = matriculas.find((matricula) => matricula.cursoId === curso.id);
              
                if (matricula && matricula.habilitado === true) {
                  curso.habilitado = true;
                  console.log('B3.- curso.id trae cursos.habilitados:', curso.habilitado);
                } else {
                  curso.habilitado = false;
                }
             
                if (curso.habilitado) {
                  cursosHabilitados.push(curso);
                } else {
                  cursosNoHabilitados.push(curso);
                }
              });

              const nombreCurso = this.cursos[0].nombre;
              const imagenCurso = this.cursos[0].imagen;

              if (nombreCurso && imagenCurso) {
                localStorage.setItem('nombreCurso', nombreCurso);
                localStorage.setItem('imagenCurso', imagenCurso);
                console.log('Nombre del curso guardado en localStorage:', nombreCurso);
                console.log('Imagen del curso guardada en localStorage:', imagenCurso);
              } else {
                console.error('Nombre de curso o imagen de curso no definidos');
              }
                       
              console.log('Cursos Alumno habilitados:', cursosHabilitados);
              console.log('Cursos Alumno no habilitados:', cursosNoHabilitados);
            });
          });
        } else {
          console.log('4.- Comienza Docente: Tipo de usuario Docente?:', this.user.tipoDeUsuario);
          this.docenteService.getDocenteIdByuserId(this.user.id).subscribe((docenteId) => {

            if (docenteId !== null && docenteId !== undefined) {
              console.log('5.- DocenteId obtenido:', docenteId);
              this.docenteporcursoService.getDocentePorCursoPorId(docenteId).subscribe((habilitado) => {

                console.log('6.- Verificar si es un docente habilitado:', habilitado);
                const esDocenteHabilitado = habilitado?.DocenteEnDocentePorCurso?.habilitado;
                  if (esDocenteHabilitado) {
                    console.log('7.- esDocenteHabilitado:', esDocenteHabilitado);
                    // this.obtenerCursosParaDocente(habilitado?.DocenteEnDocentePorCurso?.id??0);

                    this.docenteporcursoService.getCursosPorDocenteId(docenteId) 
                    .subscribe((cursosPorDocente => {
                      this.cursosPorDocente = cursosPorDocente;

                      // Filtra los valores undefined y los cursos que no tienen 'fechainicio'
                      const cursosDefinidos = this.cursosPorDocente
                        .map(docentePorCurso => docentePorCurso.CursoEnDocentePorCurso)
                        .filter(curso => curso) as Curso[];

                      // Asigna los cursos filtrados a la propiedad 'cursos'
                      console.log('8.- Cursos para docentes obtenidos:', cursosDefinidos);
                      this.cursos = cursosDefinidos;

                      const nombreCurso = this.cursos[0].nombre;
                      const imagenCurso = this.cursos[0].imagen;

                      if (nombreCurso && imagenCurso) {
                        localStorage.setItem('nombreCurso', nombreCurso);
                        localStorage.setItem('imagenCurso', imagenCurso);
                        console.log('Nombre del curso guardado en localStorage:', nombreCurso);
                        console.log('Imagen del curso guardada en localStorage:', imagenCurso);
                      } else {
                        console.error('Nombre de curso o imagen de curso no definidos');
                      }
                      console.log('8.- Cursos Docente:', this.cursos);
                    }));
                  } else {
                    console.log('Docente no habilitado');
                 }
              });
            } else {
              console.log('10.- No se encontró un docente asociado al usuario.'); 
            }
          });

        }
      }    
    });
  }  

  ingresar(curso: Curso) {
    console.log(curso);
    if (curso.habilitado) {
      this.router.navigate(['/aula-virtual', curso.id], {
        state: { nombreCurso: curso.nombre, imagenCurso: curso.imagen }
      });
    } else {
      Swal.fire({
        title: 'Ups! Hubo un problema administrativo.',
        text: 'Por favor, ponte en contacto con la administración.',
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'Cerrar sesión',
      }).then((result) => {
        if (result.isConfirmed) {
          this.authService.logout();
          this.router.navigate(['/login']);
        }
      });
    }
  }
}

