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

  private isAdmin = true;
  private isStudentOrTeacher = true;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const userData = { email, password };
    return this.http.post(`${baseURL}/api/auth/login`, userData).pipe(
      map((response: any) => {
        if (response.message === 'Login exitoso') {
          this.setSession(response);
          this.updateRol(response);
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
    localStorage.setItem('session', JSON.stringify(jwt_decode(authResult.token)));
    const expiresAt = moment().add(3600, 'second');
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  private updateRol(authResult: any) {
    let { role }: any = jwt_decode(authResult.token)

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
        this.isStudentOrTeacher = true
        break;
    }
    return
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
