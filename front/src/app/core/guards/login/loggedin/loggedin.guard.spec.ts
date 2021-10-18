import { TestBed, async, inject } from '@angular/core/testing';
import { LoggedInGuard } from './loggedin.guard';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from 'src/app/core/services/auth/auth.service';


describe('LoggedInGuard', () => {
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

  it('Deberia ...', inject([LoggedInGuard], (guard: LoggedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
