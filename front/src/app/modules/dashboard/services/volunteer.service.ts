import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class VolunteerService {
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

  updateProfilePhoto(data: any | FormData, token: string): Observable<any> {
    const url = `${this.apiUrl}/usuarios/me/updatePhoto`;
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

  getMePostulations(token: string): Observable<any> {
    const url = `${this.apiUrl}/usuarios/me/postulations`;
    const headers = new HttpHeaders({
      'x-access-token': token,
    });
    const options = { headers: headers };
    return this.http.get(url, options);
  }

  updateStatusPostulation(data: {}, idPostulation: string): Observable<any> {
    const url = `${this.apiUrl}/usuarios/postulation/${idPostulation}`;
    return this.http.put(url, data);
  }

  deletePostulation(idPostulation: string): Observable<any> {
    const url = `${this.apiUrl}/usuarios/postulation/${idPostulation}`;
    return this.http.delete(url);
  }
}
