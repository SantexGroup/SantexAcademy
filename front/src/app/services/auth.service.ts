import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../../../src/config';
import { map } from "rxjs";
import jwt_decode from "jwt-decode";
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAdmin = false;
  private isStudentOrTeacher = false;
  private username: string = '';

  constructor(private http: HttpClient) {
    const session = JSON.parse(localStorage.getItem("session") ?? '{}');
    const { role, firstName }: any = session;

    switch (role) {
      case 'admin':
        this.isAdmin = true;
        break;

      case 'teacher':
      case 'student':
        this.isStudentOrTeacher = true;
        break;

      default:
        this.isAdmin = false;
        this.isStudentOrTeacher = true;
        break;
    }

    this.username = firstName;
  }

  login(email: string, password: string) {
    const userData = { email, password };
    return this.http.post(`${baseURL}/api/auth/login`, userData).pipe(
      map((response: any) => {
        if (response.message === 'Login exitoso') {
          this.setSession(response);
        }
        return response;
      })
    );
  }

  logout(): void {
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem("session");
    this.cleanRol();
  }

  isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  private setSession(authResult: any) {
    localStorage.setItem('token', authResult.token);
    const session = jwt_decode(authResult.token);

    localStorage.setItem('session', JSON.stringify(session));
    const expiresAt = moment().add(3600, 'second');
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    this.updateUserDetails(session);
  }

  private updateUserDetails(session: any) {
    let { role, firstName }: any = session;

    switch (role) {
      case 'admin':
        this.isAdmin = true;
        break;

      case 'teacher':
      case 'student':
        this.isStudentOrTeacher = true;
        break;

      default:
        this.isAdmin = false;
        this.isStudentOrTeacher = true;
        break;
    }

    this.username = firstName; // Almacena el nombre de usuario en la propiedad 'username'
  }

  getUsername(): string | null {
    return this.username;
  }


  private cleanRol() {
    this.isAdmin = false;
    this.isStudentOrTeacher = false;
    return
  }

  getUser() {
    return JSON.parse(localStorage.getItem("session") ?? '');
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration ?? '0');
    return moment(expiresAt);
  }

  isAdministrator(): boolean {
    return this.isAdmin;
  }

  checkStudentOrTeacher(): boolean {
    return this.isStudentOrTeacher;
  }

}
