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
  MIN_NAME_LASTNAME_LENGTH,
  MAX_NAME_LASTNAME_LENGTH,
  confirmPassword,
  User
} from 'src/app/core/interfaces/users/users.interface';
import { Router } from '@angular/router';
import { MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';


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
    const userData = this.formBuilder.group(
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
      { validators: confirmPassword },      
    );
    const userProfile = this.formBuilder.group(
      {
        lastname: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(MIN_NAME_LASTNAME_LENGTH),
            Validators.maxLength(MAX_NAME_LASTNAME_LENGTH),
          ])
        ),
        name: new FormControl(null, [
          Validators.required,
          Validators.minLength(MIN_NAME_LASTNAME_LENGTH),
          Validators.maxLength(MAX_NAME_LASTNAME_LENGTH),
        ]),
        email: new FormControl(null, [
          Validators.required,
          Validators.email,
        ]),
        cuil: new FormControl(null, [
          Validators.required,
          Validators.pattern('^[0-9]{11}$'),
        ]),
        address: new FormControl(null, [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(60),
        ]),
        phone_number: new FormControl(null, [Validators.pattern('^[0-9]*$')]),
      },
    );

    this.registerForm = this.formBuilder.group({
      data: userData,
      profile: userProfile
    }       
    );
  }

  get username() {
    return this.registerForm.get('data.username') ;
  }

  get password() {
    return this.registerForm.get('data.password');
  }

  get passwordConfirm() {
    return this.registerForm.get('data.passwordConfirm');
  }
  
  get lastname() {
    return this.registerForm.get('profile.lastname');
  }
  
  get name() {
    return this.registerForm.get('profile.name');
  }
  
  get email() {
    return this.registerForm.get('profile.email');
  }
    
  get cuil() {
    return this.registerForm.get('profile.cuil');
  }

  get address() {
    return this.registerForm.get('profile.address');
  }
  
  get phone_number() {
    return this.registerForm.get('profile.phone_number');
  }

  register() {
    const newUserData: User = {
      username: this.registerForm?.get('data.username')?.value,
      password: this.registerForm?.get('data.password')?.value,
      ...this.registerForm?.controls['profile'].value,
    }
    this.loading = true;
    this.formSubscriptions.add(
      this.authService
        .register(newUserData)
        .subscribe(
          (res: any) => {
            this.toastService.presentToast(
              `Usuario ${res.username} creado exitosamente`
            );
            setTimeout(() => {
              this.router.navigateByUrl('/auth/login');
            }, 600);
          },
          (err) => {
            let msg: string;
            let errToast: MatSnackBarRef<TextOnlySnackBar>;
            if (err.status === 400) {
              msg = err.error.errors[0].msg;
            } else {
              msg = err.error
            }
            errToast = this.toastService.presentError(msg);
            errToast.afterDismissed().subscribe(() => {
              this.queryComplete();
            })
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
