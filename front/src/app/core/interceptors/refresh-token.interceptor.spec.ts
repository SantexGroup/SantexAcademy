import { TestBed } from '@angular/core/testing';

import { RefreshTokenInterceptor } from './refresh-token.interceptor';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../services/auth/auth.service';


describe('RefreshTokenInterceptor', () => {
  let authService: AuthService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule],
    providers: [
      RefreshTokenInterceptor,
      { provide: AuthService, useValue: authService },

    ]
  }));

  it('Should create the interceptor', () => {
    const interceptor: RefreshTokenInterceptor = TestBed.inject(RefreshTokenInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
