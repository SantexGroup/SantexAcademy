import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getProfileVolunteer(token: string): Observable<any> {
    const url = `${this.apiUrl}/usuarios/me/profile`;
    const headers = new HttpHeaders({
      'x-access-token': token,
    });
    const options = { headers: headers };
    return this.http.get(url, options);
  }
}
