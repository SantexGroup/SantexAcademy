import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import {
  MAX_USERNAME_LENGTH,
  MIN_USERNAME_LENGTH,
  MIN_PASSWORD_LENGTH,
  MAX_PASSWORD_LENGTH,
  PASSWORD_PATTERN,
  confirmaPassword,
} from 'src/app/core/interfaces/users/users.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  public registerForm = this.formBuilder.group({});
  formSubscriptions: Subscription = new Subscription();
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        username: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(MIN_USERNAME_LENGTH),
            Validators.maxLength(MAX_USERNAME_LENGTH),
          ])
        ),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(MIN_PASSWORD_LENGTH),
          Validators.maxLength(MAX_PASSWORD_LENGTH),
          Validators.pattern(PASSWORD_PATTERN),
        ]),
        passwordConfirm: new FormControl(null, [
          Validators.required,
          Validators.minLength(MIN_PASSWORD_LENGTH),
          Validators.maxLength(MAX_PASSWORD_LENGTH),
          Validators.pattern(PASSWORD_PATTERN),
        ]),
      },
      { validators: confirmaPassword }
    );
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get passwordConfirm() {
    return this.registerForm.get('passwordConfirm');
  }

  register() {    
    const newUserData = this.registerForm?.value;
    this.loading = true;
    this.formSubscriptions.add(
      this.authService
        .register(newUserData.username, newUserData.password)
        .subscribe(
          (res: any) => {            
            this.toastService.presentToast(`Usuario ${res.username} creado exitosamente`); 
            setTimeout(() => {
              this.router.navigateByUrl('/auth/login');
            }, 600);
          },
          (err) => {
            this.toastService.presentToast(err.error);
            this.queryComplete();
          }
        )
    );
  }

  /**
   * Setea loading en false (para ocultar barra de progreso)
   */
  private queryComplete(): void {
    setTimeout(() => (this.loading = false), 600);
  }

  ngOnDestroy(): void {
    this.formSubscriptions.unsubscribe();
  }
}
