import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../../auth/services/auth.service';
import { Curso } from '../../cursos/interface/cursos.interface';
import { UsersService } from '../../users/services/users.service';



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
                private usersService: UsersService) { }

    ngOnInit(): void {
      this.authService.validarToken()
        .subscribe(ok => {
          if (ok === true){
            console.log('user.id', this.user.id);
            this.usersService.getCursosPorUserId( this.user.id)
              .subscribe((cursos => this.cursos = cursos))
          }else{
            Swal.fire('No estás logueado');
          }
        });

    }

    //ingresar()
       //comprobar si esta ya habilitado por administracion
       //manejar solo con swal
       //si esta confirmado: mensaje "Ingrsea a Aula virtual. - Aula virtual fuera del alcance del proyecto en esta etapa"
       //si no esta aun habilitado: mensaje "Hubo una demora, ponte en contacto con la administración"
       //si sobra tiempo implementar deslogueo alumno y logueo admin para habilitar
  }
