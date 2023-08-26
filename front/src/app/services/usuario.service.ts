import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user'
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private appUrl = environment.APP_URL;

  constructor(private http: HttpClient) { }

  async createUser(user: User) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${user.token}`
    });
    try {
      const usersObservable = this.http.post(`${this.appUrl}user/`, user, {headers});
      return await firstValueFrom(usersObservable);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getUsers(token: string): Promise<User[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    try {
      const usersObservable = this.http.get<User[]>(`${this.appUrl}user/`, { headers });
      return await firstValueFrom(usersObservable);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  eliminarUsuario(index: number){
    // this.listUsuarios.splice(index,1);
  }

}
