import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../../http/api.service';
import { CookieService } from 'ngx-cookie-service';

import { User } from '../../interfaces/users/users.interface';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserService {
  loggedUser!: User;

  constructor(
    private apiService: ApiService,
    private cookieService: CookieService,
    private authService: AuthService
  ) {}

  /**
   * Recupera la información del User desde la API
   */
  public getProfile(): Observable<User> {
    const userId = this.authService.user.id;
    return this.apiService.get<User>(`users/info/${userId}`);
  }

  /**
   * Actualiza los datos personales del User
   * @param userId id del User a editar
   * @param userData datos del User a editar
   */
  public editProfile(userId: number, userData: User): Observable<User> {
    return this.apiService.put(`users/edit/${userId}`, userData);
  }

  /**
   * Actualiza la cookie de 'user'
   * @param user los datos del User recuperado
   */
  public setUser(user: User): void {
    const userJson = JSON.stringify(user);    
    this.cookieService.set('user', userJson, undefined, '/', undefined, false, 'Strict');
  }

}
