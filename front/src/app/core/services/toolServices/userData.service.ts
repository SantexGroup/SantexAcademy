import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Token } from '../../interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  token: any;

  isAuthenticated(): boolean {
    if (this.token) {
      const tokenData = jwtDecode<Token>(this.token);
      const currentTime = Math.floor(Date.now() / 1000);
      return tokenData.exp > currentTime;
    }
    return false;
  }

  /* profileId que se escribe desde el servicio de login */
  profileId:number = 0;
  /* userId que se escribe desde el servicio de login */
  userId: number = 0;

  companies: string[] = [];

  userName: string = "";

  lastName: string = "";

}
