import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensajeError: string = "";

  constructor(private fb: FormBuilder, private router: Router, private userService: UsuarioService) { }

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {  
    return this.loginForm.controls.password;
  }

  loginForm = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  })
  
  submit(myForm: FormGroup) {
    if(myForm.status == 'VALID') {
      this.userService.login(myForm.value).subscribe({
        next: (data) => { console.log(data); }, 
        error: (err) => { 
          console.log(err); 
          this.mensajeError = err;
        },
        complete: () => { 
          console.log("Done") 
          this.router.navigateByUrl('/dashboard');
        }
      });
    }
  }

}
