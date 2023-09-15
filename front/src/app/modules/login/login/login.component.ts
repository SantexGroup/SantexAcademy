import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';//BORRAR si no se usa
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/core/services/login.service';
import { UsersService } from '../../users/services/users.service';//BORRAR si no se usa
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';//BORRAR si no se usa

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.formBuilder.group({
    username:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(8)]],
  })
  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService, private toastrSvc: ToastrService){}

  ngOnInit(): void {
  }
  get username(){
    return this.loginForm.controls.username;

  }
  get password(){
    return this.loginForm.controls.password;

  }

  login(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value);
      this.router.navigateByUrl('/users/index');
      this.loginForm.reset();
    }
    else{
      this.loginForm.markAllAsTouched();
      this.toastrSvc.error("Error al ingresar los datos");
    }
  }

  }
