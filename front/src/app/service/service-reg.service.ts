import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceRegService {

  constructor(private http: HttpClient) {}

  registrarUsuario(datos: any) {
    // Realiza una solicitud POST al backend con los datos del formulario
    return this.http.post('http://localhost:4001/users/getUserById/4', datos);
  }
}
