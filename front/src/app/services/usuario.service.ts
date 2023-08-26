import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private appUrl = environment.APP_URL;

  constructor(private http: HttpClient) { }

  createUser(user: User) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${user.token}`
    });
    return this.http.post(`${this.appUrl}user/`, user, {headers});
  }

  getUsuario(){
    // return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    // this.listUsuarios.splice(index,1);
  }

}
