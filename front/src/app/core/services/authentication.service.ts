import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isUserAdmin(): boolean {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      return false;
    }
    const tokenPayload = JSON.parse(atob(token.split('.')[1]));
    console.log(tokenPayload);
    return tokenPayload.isAdmin === true;
  }
}
