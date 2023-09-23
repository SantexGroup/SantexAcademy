import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrgServicesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getOrganizations(): Observable<any> {
    const url = `${this.apiUrl}/org`;
    return this.http.get(url);
  }
}
