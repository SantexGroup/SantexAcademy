import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/core/interfaces/login';
import { LoginService } from 'src/app/core/services/login.service';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loggedUser: User = {
      id: 0,
      firstName:"",
      lastName:"",
      email:"",
      phone:"",
      password:"",
      active:false,
      admin:false};

  loginError = "";

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  loginUser: LoginData = {
    email: "",
    password: ""
  }

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
        this.loginSvc.login(this.loginForm.value as LoginData).subscribe((user: User) => {
          this.loginUser = this.loginForm.value as LoginData;
          this.loggedUser = user;
          console.log(this.loginUser, this.loggedUser);
          if (this.loginUser.password === this.loggedUser.password) {
            this.router.navigateByUrl('/dashboard');
            this.loginForm.reset();
            } else {
              this.loginError = "Usuario o contraseña incorrecta.";
            }
          }) 
        } else {
          this.loginError = "Error al ingresar los datos."
        }}}