import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { UntypedFormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/app/core/services/auth/auth.service';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let authService:AuthService;


  const formBuilder: UntypedFormBuilder = new UntypedFormBuilder();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [LoginPageComponent],
      providers: [
        { provide: UntypedFormBuilder, useValue: formBuilder },
        { provide: AuthService, useValue: authService },
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    component.loginForm = formBuilder.group({
      cuit: null,
      username: null,
      password: null,
    });
    fixture.detectChanges();
  }));

  it('Deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });
});
