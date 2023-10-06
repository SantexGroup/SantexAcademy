import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { setToken, setUserType } from '../../../../core/auth.actions';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent implements OnInit {
  loginForm: FormGroup;

  showPassword: boolean = false;
  hiddenModal: boolean = true;
  showCuit: boolean = false;
  optionSelected: string = '';

  onModalStatus: boolean = false;
  statusSession: string = '';
  routeBtnContinue: string = '';
  textBtnModal: string = '';
  isCoordinator: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private store: Store
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      cuit: ['', []],
    });
  }

  ngOnInit() {}

  sendValues() {
    const { email, password, cuit } = this.loginForm.value;

    if (this.optionSelected === 'voluntario') {
      const userData = {
        email,
        password,
      };

      this.authService.loginVolunteer(userData).subscribe({
        next: (response) => {
          this.store.dispatch(setToken({ token: response.token }));
          this.store.dispatch(setUserType({ userType: 'vol' }));
          this.onModalStatus = true;
          this.statusSession = 'success-loginV';
          this.routeBtnContinue = 'voluntariados';
          this.textBtnModal = 'Explorar Oportunidades';
        },
        error: (error) => {
          console.error('login error', error);
          this.onModalStatus = true;
          this.statusSession = 'failed-login';
          this.routeBtnContinue = 'auth/login';
          this.textBtnModal = 'Volver a intentar';
        },
        complete: () => {},
      });
    } else if (this.optionSelected === 'organizacion') {
      const userData = {
        email,
        password,
        cuit,
      };

      this.authService.loginCordinator(userData).subscribe({
        next: (response) => {
          this.store.dispatch(setToken({ token: response.token }));
          this.store.dispatch(setUserType({ userType: 'org' }));
          this.onModalStatus = true;
          this.statusSession = 'success-loginO';
          this.routeBtnContinue = 'dashboard';
          this.textBtnModal = 'Ir al Dashboard';
        },
        error: (error) => {
          console.error('Login error', error);
          this.onModalStatus = true;
          this.statusSession = 'failed-login';
          this.routeBtnContinue = 'auth/login';
          this.textBtnModal = 'Volver a intentar';
        },
        complete: () => {},
      });
    }
  }

  sendShowPassword() {
    !this.showPassword
      ? (this.showPassword = true)
      : (this.showPassword = false);
  }

  navigateToOptionsRegister() {
    this.router.navigate(['/auth/options-register']);
  }

  selectedOption(option: string) {
    this.optionSelected = option;
    if (this.optionSelected === 'organizacion') {
      this.showCuit = true;
      this.hiddenModal = false;
    } else if (this.optionSelected === 'voluntario') {
      this.showCuit = false;
      this.hiddenModal = false;
    }
  }

  changueModalStatus() {
    this.onModalStatus = false;
  }
}
