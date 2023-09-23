import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../interface/user.interface';
import { environment } from 'src/environments/environment';
import { Curso } from '../../cursos/interface/cursos.interface';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private baseUrl: string = environment.API_URL;

  constructor( private http: HttpClient ) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}user`)
  }

  getUserPorId(id: number): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}user/${ id }`)
  }

  getCursosPorUserId(id: number): Observable<Curso[]>{
    return this.http.get<Curso[]>(`${this.baseUrl}user/${ id }/cursos`)
  }

  addUser( user: User): Observable<User> {
    console.log('addUser :', this.http.post<User>(`${ this.baseUrl }user`, user))
    return this.http.post<User>(`${ this.baseUrl }user`, user)
  }
  
  editUser( user: User): Observable<User> {
    return this.http.put<User>(`${ this.baseUrl }user/${user.id}`, user)
  }

  deleteUser( id: number ): Observable<any>{
    return this.http.delete<any>(`${ this.baseUrl }user/${id}`)
  }

  activardesactivar( user: User): Observable<User> {
    return this.http.put<User>(`${ this.baseUrl }user/${user.id}`, user)
  }
}
