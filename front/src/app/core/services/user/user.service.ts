import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../http/api.service';
import { CookieService } from 'ngx-cookie-service';

import { User } from '../../interfaces/users/users.interface';

@Injectable()
export class UserService {
  loggedUser!: User;

  constructor(private apiService: ApiService, private cookieService: CookieService) {}

  getProfile(): Observable<User> {
    const user = this.cookieService.get('user');
    try {
      this.loggedUser = JSON.parse(user);
    } catch (err) {
      console.error(err);
    }
    return this.apiService.get<User>(`users/info/${this.loggedUser.id}`);
  }
}
