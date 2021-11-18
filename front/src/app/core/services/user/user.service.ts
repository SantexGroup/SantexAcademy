import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../http/api.service';
import { User } from '../../interfaces/users/users.interface';


@Injectable()


export class UserService {
  constructor(private apiService: ApiService, private http : ApiService) {}

  public register(username: string, nombre: string, apellido: string, cuil: string, email: string, telefono: string, domicilio: string, password: string ) {
    const body = {
      username,
      nombre,
      apellido,
      cuil,
      email,
      telefono,
      domicilio,
      password,
      
    };

    return this.http.post('users/new', body);
  }

  getProfile(): Observable<User> {
    return this.apiService.get<User>('users/myInfo');
  }

  
}

