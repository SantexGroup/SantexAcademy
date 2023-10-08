import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment.prod';
import { Observable } from 'rxjs';
import { organization } from 'src/app/models/organization.model';

@Injectable({
  providedIn: 'root',
})
export class OrgServicesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getAllOrganization(): Observable<[organization]> {
    const url = `${this.apiUrl}/organizacion`;
    return this.http.get<[organization]>(url);
  }

  getOrganizationById(id: string): Observable<[organization]> {
    const url = `${this.apiUrl}/organizacion?id=${id}`;
    return this.http.get<[organization]>(url);
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
