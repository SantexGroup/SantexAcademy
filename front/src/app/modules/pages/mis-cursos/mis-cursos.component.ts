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

  }
