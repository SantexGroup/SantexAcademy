import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/core/interfaces/login';
import { LoginService } from 'src/app/core/services/login.service';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';
import { Token } from 'src/app/core/interfaces/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError = "";

  form: FormGroup 

  token: Token = {
    token:'' };

  loginData: LoginData = {
    email: '',
    password: '',
  };

  constructor(private formBuilder: FormBuilder, private userSvc: UserService ,private loginSvc: LoginService, private router: Router) { 

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
    
    this.register()
  }

  ngOnInit(): void {
  }

    // get email () {
    //   return this.loginForm.controls.email;
    // }
    
    // get password () {
    //   return this.loginForm.controls.password;
    // }


    register(){
      this.form.setValue({
        email: "",
        password:"",
      })
    }
  
    login () {
        this.loginData = {
          email: this.form.value.email,
          password: this.form.value.password,
        }
        this.loginSvc.login(this.loginData).subscribe(
          (userData) => {
            this.token = <any>userData
            localStorage.setItem('token', this.token.token);
            this.router.navigateByUrl('');
            this.form.reset();
          },
          (errorData) => {
            console.error(errorData);
            this.loginError = "Email o contraseña incorrecta.";
          },
      )
      }};
