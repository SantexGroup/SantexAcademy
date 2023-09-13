import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../../../src/config';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  // para deshabilitar el guard pasar esto a true

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const userData = { email, password };
    this.isAuthenticated = true;
    return this.http.post(`${baseURL}/api/user/login`, userData);
    // Esto tiene que retornar esto ???
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

}
