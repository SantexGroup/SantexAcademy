import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { Router, Routes } from '@angular/router';
import { Subscription } from "rxjs";
import { CUIL_PATERN, EMAIL_PATERN, MAX_ADRESS_LENGTH, MAX_CUIL_LENGTH, MAX_LASTNAME_LENGTH, MAX_NAME_LENGTH, MAX_PASSWORD_LENGTH, MAX_PHONENUMBER_LENGTH, MAX_USERNAME_LENGTH, MIN_ADRESS_LENGTH, MIN_CUIL_LENGTH, MIN_LASTNAME_LENGTH, MIN_NAME_LENGTH, MIN_PASSWORD_LENGTH, MIN_PHONENUMBER_LENGTH, MIN_USERNAME_LENGTH, PASSWORD_PATERN } from "src/app/core/interfaces/users/users.interface";
import { AuthService } from "src/app/core/services/auth/auth.service";
import { ToastService } from "src/app/core/services/toast/toast.service";
import { UserService } from "src/app/core/services/user/user.service";



@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})



export class RegisterPageComponent implements OnInit, OnDestroy {

 
 

 matcher = new ErrorStateMatcher();

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
      ])),
      phone_number: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(MIN_PHONENUMBER_LENGTH),
        Validators.maxLength(MAX_PHONENUMBER_LENGTH)
      ])),
      cuil: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(MIN_CUIL_LENGTH),
        Validators.maxLength(MAX_CUIL_LENGTH),
        Validators.pattern(CUIL_PATERN),
      ])),
      adress: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(MIN_ADRESS_LENGTH),
        Validators.maxLength(MAX_ADRESS_LENGTH)
      ])),
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.pattern(EMAIL_PATERN),
        Validators.email,
        
       
      ])),
      name: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(MIN_NAME_LENGTH),
        Validators.maxLength(MAX_NAME_LENGTH)
      ])),
      lastname: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(MIN_LASTNAME_LENGTH),
        Validators.maxLength(MAX_LASTNAME_LENGTH)
      ]))  
    
    });
  }

  public register(): void {

    if (this.registerForm.invalid){
      return;
    }

    const loginData = this.registerForm?.value;
    this.formSubscritions.add(
      this.userService.register(loginData.username, loginData.password, loginData.phone_number, loginData.cuil, loginData.adress, loginData.email, loginData.name, loginData.lastname)
        .subscribe(
          (res: any) => {
            this.toastService.presentToast(res.message);
            this.router.navigateByUrl('/login');
            
          },
          (err) => {
            let msg;
            if (err.status === 400) {
              msg = err.error.errors[0].msg;
            } else {
              msg = err.error
            }

            this.toastService.presentToast(msg);
            
          }
        )
    );
  }

  //emailFormControl = new FormControl('', [Validators.required, Validators.email]);
 
  

  ngOnDestroy(): void {
  
  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
 isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
   const isSubmitted = form && form.submitted;
   return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
 }
}

