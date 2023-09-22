import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError, BehaviorSubject, tap } from 'rxjs';
import { registroInterface } from '../interfaces/registro.interface';
import { userInterface } from '../../core/interfaces/user.interface';
import { ApiService } from '../http/api.service';
import { loginInterface } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})  
export class UserService {

private userData1: BehaviorSubject<{ name: string, lastName: string }> = new BehaviorSubject<{ name: string, lastName: string }>({ name: '', lastName: '' });

  constructor( private api: ApiService ) { }

  //* informa si se llevo al cabo el registro
  registrodeUsuario: BehaviorSubject<boolean> = new BehaviorSubject<boolean> (false); 
  //* informa si se llevo al cabo el logueo
  logindeUsuario: BehaviorSubject<boolean> = new BehaviorSubject<boolean> (false); 
  //* sirve para llevar los datos del usuario a otro componente
  dataUser: BehaviorSubject<any> = new BehaviorSubject<any> ({});

  //* Registrar un usuario
  registro(user: registroInterface) : Observable <registroInterface> {
    user.rolesId = 1;
    return this.api.post<registroInterface>('user/record', user);
  }


  //* Loguear un usuario  
  login(user: loginInterface) : Observable<loginInterface> {
    return this.api.post<loginInterface>('user/login', user);
  }

  //* Recuperar datos de un usuario
  getUser(id: number) : Observable <userInterface> { 
    return this.api.get<userInterface>(`user/getUser/${id}`);
  }
  
  //* Actualizar el usuario
  updateUser(id: number, user: userInterface) : Observable <userInterface> {
    return this.api.put<userInterface>(`user/update/${id}`, user);
  }

  //* Se envia la foto a Google Drive
  uploadImage(imagen: any) : Observable <any> {
    const pictureLink = new FormData();
    pictureLink.append('pictureLink', imagen);
    return this.api.post<any>('user/upload', pictureLink );
  }

  setUserData(name: string, lastName: string) {
    this.userData1.next({ name, lastName });
  }
  
  getUserData(): Observable<{ name: string, lastName: string }> {
    return this.userData1.asObservable();
  }

  uploadPicture(imagen: FormData): Observable<any>{
    return this.api.post<any>('user/upload', imagen);
  }
}

