import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class authService {
  private apiUrl = 'url_de_tu_backend'; // Agrega la URL de tu backend aquí

  constructor(private http: HttpClient) { }

  login(email:any ): Observable<any> {
    const loginData = { email};
    return this.http.post(`${this.apiUrl}/login`, loginData);
  }

  
}