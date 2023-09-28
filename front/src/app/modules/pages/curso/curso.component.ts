import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { Curso } from '../../cursos/interface/cursos.interface';
import { Nivel } from "src/app/models/nivel.interface";
import { AuthService } from '../../auth/services/auth.service';
import { MatriculasService } from '../../matriculas/services/matriculas.service';
import { UsersService } from '../../users/services/users.service';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})

export class CursoComponent {

  nivel: Nivel = {
    nombre: '',
    descripcion: '',
  };

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
    Nivel: this.nivel,
    estado: '',
  }

  get user() {
    return this.authService.user;
  }

  cursosInscripto: Curso[] = [];

  constructor(private authService: AuthService,
              private usersService: UsersService,
              private matriculasService: MatriculasService,
              private router: Router,
            ) { }


  inscribir(){

    this.authService.validarToken()
      .subscribe(ok => {
        if (ok === true){
          const tipoDeUsuario = this.authService.user.tipoDeUsuario;
          if (tipoDeUsuario === 'Alumno') {

          console.log('user.id', this.user.id);
          this.usersService.getCursosPorUserId( this.user.id)
            .subscribe((cursos => {
              this.cursosInscripto = cursos;
              console.log('inscrip:', this.cursosInscripto);
              console.log('curso', this.curso);
              if (!this.cursosInscripto.some( curso => curso.id === this.curso.id)){
                this.matriculasService.addMatricula({
                  cursoId: this.curso.id!,
                  userId: this.user.id,
                  habilitado: false,
                  estado: 'A'
                })
                    .subscribe(matricula => {
                      console.log('add :', matricula);
                      Swal.fire({
                        title: 'Inscripción exitosa',
                        text: 'Su inscripción se ha realizado con éxito. Se ha enviado un mensaje al administrador a fin de que active su curso. Por favor, ingrese en su perfil y acceda a su curso.',
                        icon: 'success',
                        showCancelButton: false,
                        confirmButtonText: 'Ir a perfil de alumno',
                      }).then((result) => {
                        if (result.isConfirmed) {
                          this.router.navigateByUrl('/perfil-alumno');
                        }
                      });
                    });
              }else{
                Swal.fire('Ya estás inscripto');
              }
            }))
          } else {
            // El usuario no es de tipo "Alumno", muestra un mensaje de error.
            Swal.fire('Debes registrarte como Alumno para poder acceder a nuestros cursos.');
          }
        }else{
          Swal.fire('No estás logueado');
        }
      });

  }

}
