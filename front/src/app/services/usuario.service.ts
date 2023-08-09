import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor( private http: HttpClient ) { }

  //* informa si se llevo al cabo el registro
  registrodeUsuario: BehaviorSubject<boolean> = new BehaviorSubject<boolean> (false); 
  //* informa si se llevo al cabo el logueo
  logindeUsuario: BehaviorSubject<boolean> = new BehaviorSubject<boolean> (false); 
  //* sirve para llevar los datos del usuario a otro componente
  dataUser: BehaviorSubject<any> = new BehaviorSubject<any> ({});

  //* metodo para registrar un usuario
  registro(user: any) : Observable <any> {
    return this.http.get('../../assets/data.json').pipe(
      tap((user: any) => {
        this.dataUser.next(user);
        this.registrodeUsuario.next(true);
      }), 
      catchError(this.handleError)
    );
  }

  //* metodo para loguear un usuario
  login(user: any) : Observable <any> {
    console.log("desde servicio login");
    return this.http.get('../../assets/data.json').pipe(
      tap((user: any) => {
        this.dataUser.next(user);
        this.logindeUsuario.next(true);
      }), 
      catchError(this.handleError)
    );
  }

  //* metodo para manejar errores
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      console.error('Error code:', error.status, error.error)
    } 
    return throwError(() => new Error('Se produjo un error. Intente nuevamente.'));
  }
  
  get userData(): Observable<any> {
    return this.dataUser.asObservable();
  }

  get registroUsuario(): Observable<boolean> {
    return this.registrodeUsuario.asObservable();
  }
}

