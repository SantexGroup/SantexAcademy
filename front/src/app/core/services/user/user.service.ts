import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../http/api.service';
import { User } from '../../interfaces/users/users.interface';


@Injectable()


export class UserService {
  constructor(private apiService: ApiService, private http : ApiService) {}

  public register(username: string, password: string, phone_number: string, cuil: string, adress: string, email: string, name: string, lastname: string  ) {
    const body = {
      username, 
      password, 
      phone_number, 
      cuil, 
      adress, 
      email, 
      name, 
      lastname 
      
    };

    return this.http.post('users/new', body);
  }

  getProfile(): Observable<User> {
    return this.apiService.get<User>('users/myInfo');
  }

  
}

