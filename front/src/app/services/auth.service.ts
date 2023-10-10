import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../../../src/config';
import { map} from "rxjs";
import jwt_decode from "jwt-decode";
import * as moment from "moment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAdmin = true;
  private isTeacher = true;
  private isStudent = true;
  private data: any = [];  //los datos que me da el backEnd

  constructor(private http: HttpClient) { }

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
    this.isAdmin = false;
    this.isTeacher = false;
    this.isStudent = false;
  }

  isLoggedIn(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  private setSession(authResult: any) {
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('session', JSON.stringify(jwt_decode(authResult.token)));
    const expiresAt = moment().add(3600,'second');
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
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

  isTeachers(): boolean {
    return this.isTeacher;
  }

  isStudents(): boolean {
    return this.isStudent;
  }
}
