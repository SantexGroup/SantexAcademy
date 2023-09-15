import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Token } from '../../interfaces/token.interface';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor( ){
  }

  isAuthenticated() {
    const token = localStorage.getItem('accessToken');
    if (token) {
      const tokenData = jwtDecode<Token>(token);
      const currentTime = Math.floor(Date.now() / 1000);
      const expiration = tokenData.exp;
      this.userId = tokenData.id;
      return expiration > currentTime && expiration <= currentTime + 7200;
    }
    return false
  }

  newUser:boolean = false;

  /* profileId que se escribe desde el servicio de login */
  profileId:number = 0;
  /* userId que se escribe desde el servicio de login */
  userId: number = 0;

  companies: string[] = [];

  userName = "" || localStorage.getItem('userName');

  lastName = "" || localStorage.getItem('lastName');

}
