import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { ApiService } from '../http/api.service';
import { Observable, throwError } from 'rxjs';
import { catchError, flatMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenInterceptor {
  constructor(
    public api: ApiService,
    public router: Router,
    public authService: AuthService,
  ) {
  }

  handleErrors(err: any, req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Unauthorized.
    if (err.status === 401 && this.router.url !== '/auth/login') {
      this.authService.logOut();
      return throwError(err);
    }

    // Session expired.
    if (err.status === 440) {
      this.authService.logOut();
      return throwError(err);
    }

    // 404
    if (err.status === 404) {
      this.router.navigateByUrl('');
      return throwError(err);
    }

    // Server Not Available
    if (err.status === 503 || err.status === 500) {
      this.router.navigateByUrl('');
      return throwError(err);
    }
    return throwError(err);
  }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError(
          (err: any) => (this.handleErrors(err, req, next)),
        ),
      );
  }
}
