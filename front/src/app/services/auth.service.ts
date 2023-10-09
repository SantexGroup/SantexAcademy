import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../../../src/config';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private isAdmin = false;
  private isTeacher = false;
  private isStudent = false;
  private data: any = [];  //los datos que me da el backEnd

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const userData = { email, password };
    this.data = this.http.post(`${baseURL}/api/user/login`, userData);

    // CONTROLAR ESTO
    if ('con la nueva respuesta buscar si se loggeo OK o no y ahi recien cambiar a true') { }
    if (true) {
      this.isAuthenticated = true;
    }

    // CONTROLAR ESTO TAMBIEN
    if ('con la nueva respuesta del backend podre definir esto...') {
      // console.log('siempre entra a este IF y por eso siempre todo queda en true')
      this.isAdmin = true;
      this.isTeacher = true;
      this.isStudent = true;
    }

    return this.data
  }

  logout(): void {
    this.isAuthenticated = false;
    this.isAdmin = false;
    this.isTeacher = false;
    this.isStudent = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  isAdministrator(): boolean {
    return this.isAdmin;
  }

  isTeachers(): boolean {
    return this.isTeacher;
  }

  isStudents(): boolean {
    return this.isStudent;
  }

}
