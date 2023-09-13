import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private apiUrl = 'http://localhost:3000';
  

  constructor(private http: HttpClient) { }

  login(password:any): Observable<any> {
    const loginData = { password };
    return this.http.post(`${this.apiUrl}/login/confirm-password`, loginData);
  }
}

