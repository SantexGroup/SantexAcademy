import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { Router, Routes } from '@angular/router';
import { Subscription } from "rxjs";
import { MAX_PASSWORD_LENGTH, MAX_USERNAME_LENGTH, MIN_PASSWORD_LENGTH, MIN_USERNAME_LENGTH, PASSWORD_PATERN } from "src/app/core/interfaces/users/users.interface";
import { AuthService } from "src/app/core/services/auth/auth.service";
import { ToastService } from "src/app/core/services/toast/toast.service";
import { UserService } from "src/app/core/services/user/user.service";

@Component({
    selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit, OnDestroy {


  hide = true;


public registerForm = this.formBuilder.group({ commodity: [null] });
  formSubscritions: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastService: ToastService,
   
  ) {
  }


  ngOnInit(): void {
    this.createRegisterForm();
  }

  private createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      username: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(MIN_USERNAME_LENGTH),
        Validators.maxLength(MAX_USERNAME_LENGTH)
      ])),
      password: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(MIN_PASSWORD_LENGTH),
        Validators.maxLength(MAX_PASSWORD_LENGTH),
        Validators.pattern(PASSWORD_PATERN),
      ]))
    });
  }

  public register(): void {

    if (this.registerForm.invalid){
      return;
    }

    const loginData = this.registerForm?.value;
    this.formSubscritions.add(
      this.userService.register(loginData.username, loginData.password)
        .subscribe(
          (res: any) => {
            this.toastService.presentToast('usuario creado con exito');
            this.router.navigateByUrl('/login');
            
          },
          (err) => {
            this.toastService.presentToast(err.error);
          }
        )
    );
  }



  ngOnDestroy(): void {
  
  }

  

}
