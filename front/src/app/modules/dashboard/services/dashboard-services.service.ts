import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/app/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardServicesService {
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

  updateProfileVolunteer(data: any, token: string): Observable<any> {
    const url = `${this.apiUrl}/usuarios/me/update`;
    const headers = new HttpHeaders({
      'x-access-token': token,
    });
    const options = { headers: headers };
    return this.http.put(url, data, options);
  }

  deleteProfileVolunteer(token: string): Observable<any> {
    const url = `${this.apiUrl}/usuarios/me/profile`;
    const headers = new HttpHeaders({
      'x-access-token': token,
    });
    const options = { headers: headers };
    return this.http.delete(url, options);
  }
}
