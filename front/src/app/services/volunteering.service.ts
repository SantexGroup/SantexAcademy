import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { Observable } from 'rxjs';
import { volunteering } from '../models/volunteering.model';
@Injectable({
  providedIn: 'root',
})
export class VolunteeringService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getVolunteers(): Observable<{
    items: number;
    volunteerings: volunteering[];
  }> {
    const url = `${this.apiUrl}/voluntariado/all`;
    return this.http.get<{ items: number; volunteerings: volunteering[] }>(url);
  }

  getVolunteerById(
    id: string
  ): Observable<{ volunteeringFound: volunteering }> {
    const url = `${this.apiUrl}/voluntariado/${id}`;
    return this.http.get<{ volunteeringFound: volunteering }>(url);
  }

  applicationVoluntering(
    token: string,
    idOrg: string,
    idVol: string
  ): Observable<any> {
    const url = `${this.apiUrl}/usuarios/postulate/${idOrg}/${idVol}`;
    const headers = new HttpHeaders({
      'x-access-token': token,
    });
    const options = { headers: headers };
    return this.http.post(url, {}, options);
  }
}
