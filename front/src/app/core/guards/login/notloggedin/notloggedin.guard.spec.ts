import { TestBed, async, inject } from '@angular/core/testing';

import { NotLoggedInGuard } from './notloggedin.guard';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from 'src/app/core/services/auth/auth.service';


describe('LoggedOutGuard', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let router: Router;
  let routerTestingModule: RouterTestingModule;
  let authService: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [{ provide: AuthService, useValue: authService }]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);

    router = TestBed.inject(Router);
    routerTestingModule = TestBed.inject(RouterTestingModule);
  });


  it('Deberia ...', inject([NotLoggedInGuard], (guard: NotLoggedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
