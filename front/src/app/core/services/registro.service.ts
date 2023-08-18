import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegistroService {
  private baseUrl = 'http://localhost:4001/user/';

  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: any): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.http.post(url, usuario);
  }
}