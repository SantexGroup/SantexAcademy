import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { UserLogin } from '../interfaces/user';
import { firstValueFrom, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private appUrl: string;
  private apiUrl: string;

  constructor(private http: HttpClient) {
    this.appUrl = environment.APP_URL;
    this.apiUrl = 'user/login';
  }

  async login(user: UserLogin): Promise<any> {
    try {
      const response = this.http.post(`${this.appUrl}${this.apiUrl}`, user);
      return await firstValueFrom(response);
    } catch (error) {
      throw error;
    }
  }
}
