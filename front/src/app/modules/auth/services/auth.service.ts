import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError, map, of, switchMap, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

import { AuthResponse, Usuario } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false; // Variable para el estado de inicio de sesión
  userType: string | undefined; // Variable para el tipo de usuario
  //Para validar los cambios en la auth
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  
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

  login(email: string, password: string): Observable<boolean> {
    const url = `${this.baseUrl}user/login`;
    const body = { email, password };
  
    return this.http.post<AuthResponse>(url, body).pipe(
      tap((resp) => {
        if (resp.ok) {
          localStorage.setItem('token', resp.token!);
          this._user = {
            username: resp.username!,
            id: resp.id!,
            tipoDeUsuario: resp.tipoDeUsuario!
          };
        }
      }),
      map((resp) => resp.ok),
      catchError((err) => {
        this.toastr.error(err.error.msg, 'Error');
        return of(false);
      }),
      switchMap(() => this.validarToken()), // Actualizo el estado de autenticación después del inicio de sesión
      tap(() => {
        this.isAuthenticatedSubject.next(true); // Actualizo el estado de autenticación
      })
      );
  }

  getIsAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
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

  logout() {
    Swal.fire({
      title: '¿Desea cerrar la sesión?',
      text: 'Seleccione una opción:',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Reiniciar Sesión',
      cancelButtonText: 'Salir'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si elige reiniciar sesion, borra datos almacenados
        localStorage.clear(); // Elimina todos los datos del localStorage
        this.isAuthenticatedSubject.next(false); 
  
        // Redirige al usuario a la página de inicio de sesión después de cerrar la sesión
        this.router.navigateByUrl('/login').then(() => {
          this.isLoggedIn = false; // Actualiza el estado de autenticación
        });
      } else {
        // Si elige salir, borra datos almacenados
        localStorage.clear();
        this.isAuthenticatedSubject.next(false); 
  
        // Redirige al usuario al dashboard después de cerrar la sesión
        this.router.navigateByUrl('/dashboard').then(() => {
          this.isLoggedIn = false; // Actualiza el estado de autenticación
        });
      }
    });
  }
  

  setLoggedInStatus(isLoggedIn: boolean, userType: string) {
    this.isLoggedIn = isLoggedIn;
    this.userType = userType;
  }

  // Método para verificar si el usuario ha iniciado sesión
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
   
}
