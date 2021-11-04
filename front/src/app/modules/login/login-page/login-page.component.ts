import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';import { AuthService } from 'src/app/core/services/auth/auth.service';
import { MAX_PASSWORD_LENGTH, MAX_USERNAME_LENGTH, MIN_PASSWORD_LENGTH, MIN_USERNAME_LENGTH } from 'src/app/core/interfaces/users/users.interface';
import { ToastService } from 'src/app/core/services/toast/toast.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {
  public loginForm = this.formBuilder.group({ commodity: [null] });
  formSubscriptions: Subscription = new Subscription();
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private toastService: ToastService,
  ) {
  }


  ngOnInit(): void {
    this.crearLoginForm();
  }

  private crearLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(MIN_USERNAME_LENGTH),
        Validators.maxLength(MAX_USERNAME_LENGTH)
      ])),
      password: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(MIN_PASSWORD_LENGTH),
        Validators.maxLength(MAX_PASSWORD_LENGTH)
      ]))
    });
  }

  public login(): void {
    const loginData = this.loginForm?.value;
    this.loading = true;
    this.formSubscriptions.add(      
      this.authService.login(loginData.username, loginData.password)
        .subscribe(
          (res: any) => {
            this.authService.setUser(res);
            this.toastService.presentToast(`Bienvenido ${res.user?.username}`);
            this.router.navigateByUrl('/dashboard');
            this.queryComplete()
          },
          (err) => {
            this.toastService.presentToast(err.error);
            this.queryComplete()
          }
        )
    );
  }

  public checkForm() {
    if (this.loginForm.valid) {
      this.login();
    }
  }

  /**
   * Setea loading en false (para ocultar barra de progreso)
   */
  private queryComplete(): void {
    setTimeout(() => this.loading = false, 600);
  }

  ngOnDestroy(): void {
    this.formSubscriptions.unsubscribe();
  }
}
