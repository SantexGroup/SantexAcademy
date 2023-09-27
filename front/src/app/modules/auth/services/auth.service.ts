import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

import { AuthResponse, Usuario } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  private baseUrl: string = environment.API_URL;
  private _user!: Usuario;

 

  get user(){
    return { ...this._user };
  }

  constructor(private http: HttpClient, 
              private toastr: ToastrService, 
              private router: Router,
            ) { }

  register(
    nombre: string,
    apellido: string,
    username: string,
    email: string,
    password: string,
    estado: boolean,
    IdTipoDeUsuario: string
  ){
    const url = `${ this.baseUrl}user`;
    const body = {nombre, apellido, username, email, password, estado, IdTipoDeUsuario};

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap(resp => {
          if(resp.ok){
            localStorage.setItem('token', resp.token!);
            this._user = {
              username: resp.username!,
              id: resp.id!,
              tipoDeUsuario: resp.tipoDeUsuario!
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
              id: resp.id!,
              tipoDeUsuario: resp.tipoDeUsuario!
            }
          }
        }),
        map(resp => resp.ok),
        catchError(err => {
          this.toastr.error(err.error.msg, 'Error'); // Muestra el mensaje de error con Toastr
          return of(err.error.msg);
        
         } )
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
                    id: resp.id!,
                    tipoDeUsuario: resp.tipoDeUsuario!
                  }
                  return resp.ok;
                }),
                catchError( err => of(false))
              )

  }

  logout(){
    // localStorage.removeItem('token');
      Swal.fire({
        title: '¿Desea cerrar la sesión?',
        text: 'Seleccione una opción:',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Reiniciar Sesión',
        cancelButtonText: 'Salir'

      }).then((result) => {
        if (result.isConfirmed) {
          // Si elige reiniciar sesion, borra datos almacenados y redirige a login
          localStorage.clear(); // Elimina todos los datos del localStorage
          this.router.navigateByUrl('/login'); // Redirige al usuario a la página de inicio de sesión
        } else {
          // Si elige salir, borra datos almacenados y redirige a pagina de principal
          localStorage.clear();
          this.router.navigateByUrl('/dashboard'); // Redirige al usuario al dashboard
        }
      });
  }
   
}
