import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { AuthService } from '../../auth/services/auth.service';
import { Curso } from '../../cursos/interface/cursos.interface';
import { UsersService } from '../../users/services/users.service';
import { Matricula } from '../../matriculas/interfaces/interfaces';

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
  
    constructor(private authService: AuthService,
                private usersService: UsersService,
                private router: Router,
              ) { }

              ngOnInit(): void {
                this.authService.validarToken()
                  .subscribe(ok => {
                    if (ok === true) {
                      console.log('user.id', this.user.id);
                      this.usersService.getCursosPorUserId(this.user.id)
                        .subscribe((cursos => {
                          this.cursos = cursos;
                          
                          if (this.cursos && this.cursos.length > 0 && this.cursos[0].imagen) {
                            localStorage.setItem('nombreCurso', this.cursos[0].nombre);
                            localStorage.setItem('imagenCurso', this.cursos[0].imagen);
                            console.log('Nombre del curso guardado en localStorage:', this.cursos[0].nombre);
                            console.log('Imagen del curso guardada en localStorage:', this.cursos[0].imagen);
                          }
                        }));
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
