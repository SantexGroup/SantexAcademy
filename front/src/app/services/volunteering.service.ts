import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VolunteeringService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getVolunteers(): Observable<any> {
    const url = `${this.apiUrl}/voluntariado/all`;
    return this.http.get(url);
  }

  getVolunteerById(id: string): Observable<any> {
    const url = `${this.apiUrl}/voluntariado/${id}`;
    return this.http.get(url);
  }
}
