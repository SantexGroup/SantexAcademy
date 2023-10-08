import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../auth/services/auth.service';
import { Curso } from '../../cursos/interface/cursos.interface';
import { UsersService } from '../../users/services/users.service';
import { Matricula } from '../../matriculas/interfaces/interfaces';
import { DocenteporcursoService } from '../docentecurso/services/docenteporcurso.service';
import { Docenteporcurso } from '../docentecurso/interfaces/docenteporcurso';

// Defino la interface CursoConMatricula que extiende la interface Curso y agrega la propiedad Matricula
interface CursoConMatricula extends Curso {
  Matricula?: Matricula;
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
    cursosPorDocente: Docenteporcurso[] = [];

    constructor(private authService: AuthService,
                private usersService: UsersService,
                private router: Router,
                private docenteporcursoService: DocenteporcursoService,
              ) { }

              ngOnInit(): void {
                this.authService.validarToken()
                  .subscribe(ok => {
                    if (ok === true) {
                      console.log('user.id', this.user.id);
                      console.log('tipoDeUsuario', this.user.tipoDeUsuario);
                      if (this.user.tipoDeUsuario === "Alumno") {
                      this.usersService.getCursosPorUserId(this.user.id)
                        .subscribe((cursos => {
                          this.cursos = cursos;
                          
                          if (this.cursos && this.cursos.length > 0 && this.cursos[0].imagen) {
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
                          } else {
                            console.error('No hay cursos o imagen de curso no definida');
                          }                          
                        }))};

                        if (this.user.tipoDeUsuario === "Docente") {
                          console.log('ID del docente enviado:', this.user.id); 
                          this.docenteporcursoService.getCursosPorDocenteId(this.user.id) 
                            .subscribe((cursosPorDocente => {
                              this.cursosPorDocente = cursosPorDocente;
                        
                              // Filtra los valores undefined y los cursos que no tienen 'fechainicio'
                              const cursosDefinidos = this.cursosPorDocente
                                .map(docentePorCurso => docentePorCurso.CursoEnDocentePorCurso)
                                .filter(curso => curso) as Curso[];
                        
                              // Asigna los cursos filtrados a la propiedad 'cursos'
                              this.cursos = cursosDefinidos;
                        
                              console.log("Cursos por docente:", this.cursos);
                            }));
                        }
                    } else {
                      Swal.fire('No estás logueado');
                    }
                  });
              }

    ingresar(curso: CursoConMatricula) {
      console.log(curso);
      if (curso.Matricula) {
        const matricula: Matricula = curso.Matricula; // Obtiene la matrícula asociada al curso
    
        if (matricula.habilitado) {
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
          }).then((result) => {// Maneja la respuesta negativa
            if (result.isConfirmed) {
              this.authService.logout();
              this.router.navigate(['/login']);
            }
          });
        }
      }
    }

    esCursoHabilitado(curso: CursoConMatricula): boolean {
      return curso.Matricula?.habilitado ?? false;
    }

    
}
