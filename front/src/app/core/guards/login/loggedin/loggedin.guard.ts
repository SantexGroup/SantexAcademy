import { Injectable } from '@angular/core';
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from 'src/app/core/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkUserIsLoggedIn(state);
  }

  checkUserIsLoggedIn(url: RouterStateSnapshot) {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
