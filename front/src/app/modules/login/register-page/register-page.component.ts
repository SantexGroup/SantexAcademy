import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroupDirective, NgForm, Validators } from "@angular/forms";
import { ErrorStateMatcher } from "@angular/material/core";
import { Router, Routes } from '@angular/router';
import { Subscription } from "rxjs";
import { CUIL_PATERN, MAX_APELLIDO_LENGTH, MAX_DOMICILIO_LENGTH, MAX_NOMBRE_LENGTH, MAX_PASSWORD_LENGTH, MAX_USERNAME_LENGTH, MIN_APELLIDO_LENGTH, MIN_DOMICILIO_LENGTH, MIN_NOMBRE_LENGTH, MIN_PASSWORD_LENGTH, MIN_USERNAME_LENGTH, PASSWORD_PATERN } from "src/app/core/interfaces/users/users.interface";
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
      nombre: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(MIN_NOMBRE_LENGTH),
        Validators.maxLength(MAX_NOMBRE_LENGTH)
      ])),
      apellido: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(MIN_APELLIDO_LENGTH),
        Validators.maxLength(MAX_APELLIDO_LENGTH)
      ])),
      cuil: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(MIN_USERNAME_LENGTH),
        Validators.maxLength(MAX_USERNAME_LENGTH),
        Validators.pattern(CUIL_PATERN),
      ])),
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(MIN_USERNAME_LENGTH),
        Validators.email,
       
      ])),
      telefono: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(MIN_USERNAME_LENGTH),
        Validators.maxLength(MAX_USERNAME_LENGTH)
      ])),
      domicilio: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(MIN_DOMICILIO_LENGTH),
        Validators.maxLength(MAX_DOMICILIO_LENGTH)
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
      this.userService.register(loginData.username, loginData.nombre, loginData.apellido, loginData.cuil, loginData.email, loginData.telefono, loginData.domicilio, loginData.password)
        .subscribe(
          (res: any) => {
            this.toastService.presentToast(res.message);
            this.router.navigateByUrl('/login');
            
          },
          (err) => {
            this.toastService.presentToast(err.error);
            
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

