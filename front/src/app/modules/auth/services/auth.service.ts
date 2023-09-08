import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthResponse, Usuario } from '../interfaces/interfaces';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.API_URL;
  private _user!: Usuario;

  get user(){
    return { ...this._user };
  }

  constructor(private http: HttpClient) { }

  register(
    nombre: string,
    apellido: string,
    username: string,
    email: string,
    password: string,
    estado: boolean,
    rol: string
  ){
    const url = `${ this.baseUrl}user`;
    const body = {nombre, apellido, username, email, password, estado, rol};

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap(resp => {
          if(resp.ok){
            localStorage.setItem('token', resp.token!);
            this._user = {
              username: resp.username!,
              id: resp.id!
            }
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg))
      )
  }

  login( email: string, password: string){

    const url = `${ this.baseUrl}user/login`;
    const body = {email, password};

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap(resp => {
          if(resp.ok){
            localStorage.setItem('token', resp.token!);
            this._user = {
              username: resp.username!,
              id: resp.id!
            }
          }
        }),
        map( resp => resp.ok ),
        catchError( err => of(err.error.msg))
      )

  }

  validarToken(): Observable<boolean>{

    const url = `${ this.baseUrl}user/renew`;
    const headers = new HttpHeaders()
      .set('Authorization', localStorage.getItem('token') || '');

    return this.http.get<AuthResponse>( url, { headers })
              .pipe(
                map( resp => {
                  // console.log(resp.token);
                  localStorage.setItem('token', resp.token!);
                  this._user = {
                    username: resp.username!,
                    id: resp.id!
                  }
                  return resp.ok;
                }),
                catchError( err => of(false))
              )

  }

  logout(){
    // localStorage.removeItem('token');
    localStorage.clear();
  }

}
