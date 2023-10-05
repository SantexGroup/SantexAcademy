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


interface Curso extends Matricula, Docenteporcurso {
  id?: number;
  nombre: string;
  descripcion: string;
  imagen?: string;
  duracion: number;
  capacidad: number;
  idnivel: number;
  requisitos: string;
  habilitado: boolean;
  fechainicio: Date;
  fechafin?: Date;
  idusuarioalta: number;
  idusuariomodificacion?: number;
  estado: string;
  createdAt: Date;
  updatedAt?: Date;
  Nivel?: Nivel; 
}

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
  
  constructor(private authService: AuthService,
              private usersService: UsersService,
              private router: Router,
              private docenteporcursoService: DocenteporcursoService,
              private docenteService:DocenteService,
             ) { }


  ngOnInit(): void {
    this.authService.validarToken().subscribe((ok) => {
      if (!ok) {
        Swal.fire('No estás logueado');
                    
      } else {
        console.log('1.- Usuario autenticado. ID de usuario:', this.user.id);
        if (this.user.tipoDeUsuario === 'Alumno'){
          console.log('2.- Tipo de usuario Alumno?:', this.user.tipoDeUsuario);
          this.usersService.getCursosPorUserId(this.user.id).subscribe((cursos => { 

            this.cursos = cursos;
            if (this.cursos && this.cursos.length > 0 && this.cursos[0].imagen) {
              localStorage.setItem('nombreCurso', this.cursos[0].nombre);
              localStorage.setItem('imagenCurso', this.cursos[0].imagen);
              console.log('Nombre del curso guardado en localStorage:', this.cursos[0].nombre);
              console.log('Imagen del curso guardada en localStorage:', this.cursos[0].imagen);
            }
              console.log('3.- Cursos Alumno:', this.cursos);
          }));

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
                    this.docenteporcursoService.getCursoPorDocentePorID(docenteId).subscribe((cursos) => {

                      console.log('8.- Cursos para docentes obtenidos:', cursos);
                      this.cursos = cursos;

                      if (this.cursos && this.cursos.length > 0 && this.cursos[0].imagen) {
                        localStorage.setItem('nombreCurso', this.cursos[0].nombre);
                        localStorage.setItem('imagenCurso', this.cursos[0].imagen);
                        console.log('Nombre del curso guardado en localStorage:', this.cursos[0].nombre);
                        console.log('Imagen del curso guardada en localStorage:', this.cursos[0].imagen);
                      }
                        console.log('8.- Cursos Docente:', this.cursos);



                    });

                  } else {
                   // this.obtenerCursosParaocente();

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

//   validarCursos() {
//     this.cursos.forEach(curso => {
//       if (curso.hasOwnProperty('Matricula')) {
//         curso.habilitado = curso.Matricula?.habilitado ?? false; // Para estudiantes
//       } else if (curso.hasOwnProperty('Docenteporcurso')) {
//         curso.habilitado = curso.Docenteporcurso?.habilitado ?? false; // Para docentes
//       } else {
//         curso.habilitado = false; // Si no es ni estudiante ni docente, no está habilitado
//       }
//     });
//   }
// }

  // esCursoHabilitado(curso: Curso): boolean {
  //   if (curso.hasOwnProperty('Matricula')) {
  //     return curso.Matricula?.habilitado ?? false; // Para estudiantes
  //   } else if (curso.hasOwnProperty('Docenteporcurso')) {
  //     return curso.Docenteporcurso?.habilitado ?? false; // Para docentes
  //   } else {
  //     return false; // Si no es ni estudiante ni docente, no está habilitado
  //   }
  // }   


    
}

