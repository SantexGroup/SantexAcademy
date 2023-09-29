import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrgServicesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getOrganizationById(id: string): Observable<any> {
    const url = `${this.apiUrl}/organizacion?id=${id}`;
    return this.http.get(url);
  }

  getProfileOrganization(token: string): Observable<any> {
    const url = `${this.apiUrl}/organizacion/me/profile`;
    const headers = new HttpHeaders({
      'x-access-token': token,
    });
    const options = { headers: headers };
    return this.http.get(url, options);
  }
}
