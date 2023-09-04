import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users/services/users.service';
import { User } from '../../users/interface/user.interface';
import { Curso } from '../../cursos/interface/cursos.interface';
import { CursosService } from '../../cursos/services/cursos.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[] = [];
  cursos: Curso[] = [];
  errorMensaje: string | undefined;
  
  constructor( private usersService: UsersService, private cursoService: CursosService ) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe({
      next: (response) => {
        console.log(response);
        this.users = response; // Extraer el array de usuarios de la respuesta
      },
      error: (error) => {
        console.error(error);
        this.errorMensaje = 'Ocurrió un error al obtener los usuarios. Por favor, inténtalo de nuevo más tarde.';
      }
  });
  this.cursoService.getCursos().subscribe({
    next: (response) => {
      console.log(response);
      this.cursos = response; // Extraer el array de cursos de la respuesta
    },
    error: (error) => {
      console.error(error);
      this.errorMensaje = 'Ocurrió un error al obtener los cursos. Por favor, inténtalo de nuevo más tarde.';
    }
});
  }

}
