import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { User } from '../../interface/user.interface';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  users: User[] = [];
  errorMensaje: string | undefined;
  
  constructor( private usersService: UsersService ) { }

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
  }

}
