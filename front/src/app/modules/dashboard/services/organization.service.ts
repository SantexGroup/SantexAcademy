import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/app/environments/environment.prod';
import { Observable } from 'rxjs';
import { volunteering } from '../models/volunteerings.model';
@Injectable({
  providedIn: 'root',
})
export class OrganizationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getProfileOrganization(token: string): Observable<any> {
    const url = `${this.apiUrl}/organizacion/me/profile`;
    const headers = new HttpHeaders({
      'x-access-token': token,
    });
    const options = { headers: headers };
    return this.http.get(url, options);
  }

  updateProfileOrganization(data: string, token: string): Observable<any> {
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

  updatePhotoProfileOrg(data: any | FormData, token: string): Observable<any> {
    const url = `${this.apiUrl}/organizacion/me/updatePhoto`;
    const headers = new HttpHeaders({
      'x-access-token': token,
    });
    const options = { headers: headers };
    return this.http.put(url, data, options);
  }

  addVolunteering(data: any, token: string): Observable<any> {
    const url = `${this.apiUrl}/voluntariado`;
    const headers = new HttpHeaders({
      'x-access-token': token,
    });
    const options = { headers: headers };
    return this.http.post(url, data, options);
  }

  volunteeringByIdOrg(token: string): Observable<[volunteering]> {
    const url = `${this.apiUrl}/voluntariado/me/volunteerings`;
    const headers = new HttpHeaders({
      'x-access-token': token,
    });
    const options = { headers: headers };
    return this.http.get<[volunteering]>(url, options);
  }

  updateVolunteeringByIdOrg(
    token: string,
    data: any,
    idVol: string
  ): Observable<any> {
    const url = `${this.apiUrl}/voluntariado/me/${idVol}`;
    const headers = new HttpHeaders({
      'x-access-token': token,
    });
    const options = { headers: headers };
    return this.http.put(url, data, options);
  }

  deleteVolunteeringByIdOrg(token: string, idVol: string): Observable<any> {
    const url = `${this.apiUrl}/voluntariado/me/${idVol}`;
    const headers = new HttpHeaders({
      'x-access-token': token,
    });
    const options = { headers: headers };
    return this.http.delete(url, options);
  }

  getVolunteeringsCompleted(token: string): Observable<any> {
    const url = `${this.apiUrl}/organizacion/postulation/completed`;
    const headers = new HttpHeaders({
      'x-access-token': token,
    });
    const options = { headers: headers };
    return this.http.get(url, options);
  }

  creditRewardVolunteer(token: string): Observable<any> {
    const url = `${this.apiUrl}/organizacion/postulation/accreditation`;
    const headers = new HttpHeaders({
      'x-access-token': token,
    });
    const options = { headers: headers };
    return this.http.post(url, {}, options);
  }
}
