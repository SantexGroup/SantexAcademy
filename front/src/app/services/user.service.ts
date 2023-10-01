import { Injectable } from '@angular/core';
import { baseURL } from 'src/config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = baseURL;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/api/user`);
  }

  getUserDetails(userId: string): Observable<any> {    
    const url = `${this.apiUrl}/api/user/${userId}`;
    return this.http.get(url);
  }
}
