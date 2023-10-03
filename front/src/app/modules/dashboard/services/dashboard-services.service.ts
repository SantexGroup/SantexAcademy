import { Injectable } from '@angular/core';
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

  getProfileOrganization(token: string): Observable<any> {
    const url = `${this.apiUrl}/organizacion/me/profile`;
    const headers = new HttpHeaders({
      'x-access-token': token,
    });
    const options = { headers: headers };
    return this.http.get(url, options);
  }


  updateProfileOrganization(data:string, token: string): Observable<any> {
    const url = `${this.apiUrl}/organizacion/me/update`;

    const headers = new HttpHeaders({
      'x-access-token': token,
    });
    const options = { headers: headers };
    return this.http.put(url, data, options);
  }



  deleteProfileOrganization(token: string): Observable<any> {
    const url = `${this.apiUrl}/organizacion/me`;
    const headers = new HttpHeaders({
      'x-access-token': token,
    });
    const options = { headers: headers };
    return this.http.delete(url, options);
  }


}
