import { Component, Input } from '@angular/core';
import { Curso } from '../../cursos/interface/cursos.interface';
import { Nivel } from "src/app/models/nivel.interface";
import { AuthService } from '../../auth/services/auth.service';
import { MatriculasService } from '../../matriculas/services/matriculas.service';
import { UsersService } from '../../users/services/users.service';
import Swal from 'sweetalert2';

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
              private matriculasService: MatriculasService) { }


  inscribir(){

    this.authService.validarToken()
      .subscribe(ok => {
        if (ok === true){
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
                    .subscribe( matricula => {
                      console.log('add :', matricula)
                      Swal.fire('Inscripción exitosa');
                    })
              }else{
                Swal.fire('Ya estás inscripto');
              }
            }))
        }else{
          Swal.fire('No estás logueado');
        }
      });
    
  }

}
