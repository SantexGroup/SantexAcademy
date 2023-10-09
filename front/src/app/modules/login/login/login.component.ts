import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/core/interfaces/login';
import { LoginService } from 'src/app/core/services/login.service';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';
import { LoginModule } from './login.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError = "";

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })



  constructor(private formBuilder: FormBuilder, private userSvc: UserService ,private loginSvc: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

    get email () {
      return this.loginForm.controls.email;
    }
    
    get password () {
      return this.loginForm.controls.password;
    }



    login () {
      if(this.loginForm.valid){
        this.loginSvc.login(this.loginForm.value as LoginData).subscribe(
          (userData) => {
            localStorage.setItem('token', userData.token);
            this.router.navigateByUrl('');
            this.loginForm.reset();
          },
          (errorData) => {
            console.error(errorData);
            this.loginError = "Email o contraseña incorrecta.";
          },
      )
        } else {
          this.loginError = "Error al ingresar los datos."
        }}}
