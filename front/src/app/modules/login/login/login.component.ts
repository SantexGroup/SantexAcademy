import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.formBuilder.group({
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(8)]],
  });
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private toastrSvc: ToastrService){}

  ngOnInit(): void {
  }
  get email(){
    return this.loginForm.controls.email;

  }
  get password(){
    return this.loginForm.controls.password;

  }

  login(){
    console.log(this.loginForm.value);
    const { email, password } = this.loginForm.value;
    /*if(this.loginForm.valid){*/
    if (email !== null && password !== null && email !== undefined && password !== undefined) {
    this.authService.login(email, password)
    .subscribe( ok => {
      console.log(ok)
      if (ok === true){
        switch (this.authService.user.id) {
          case 4:
          this.router.navigateByUrl('/users/index');
          // Recargar la página después de la redirección
        setTimeout(() => {
          window.location.reload();
        }, 100);
          break;
          case 3:
            this.router.navigateByUrl('/catalogo-cursos');
            // Recargar la página después de la redirección
        setTimeout(() => {
          window.location.reload();
        }, 100);
         break;
          default:
            this.router.navigateByUrl('/dashboard');
        
        this.loginForm.reset();
    }}
      else{
       this.loginForm.markAllAsTouched();
      /*this.toastrSvc.error("Error");*/
    }
  })
} }}