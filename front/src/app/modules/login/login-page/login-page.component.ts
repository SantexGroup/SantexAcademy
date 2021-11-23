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
  formSubscritions: Subscription = new Subscription();

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
    this.formSubscritions.add(
      this.authService.login(loginData.username, loginData.password)
        .subscribe(
          (res: any) => {
            this.authService.setUser(res);
            this.router.navigateByUrl('/dog/listado');
            
          },
          (err) => {
            this.toastService.presentToast(err.error);
          }
        )
    );
  }

  public checkForm() {
    if (this.loginForm.valid) {
      this.login();
    }
  }

  ngOnDestroy(): void {
    this.formSubscritions.unsubscribe();
  }
}
