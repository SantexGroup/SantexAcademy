import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { Observable } from 'rxjs';
import { volunterData } from '../models/dataForms.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  registerVolunteer(userData: volunterData): Observable<any> {
    const url = `${this.apiUrl}/usuarios/create`;
    return this.http.post(url, userData);
  }
}
