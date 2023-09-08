import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  miFormulario: FormGroup = this.fb.group({
    email: ['johndoe@gmail.com', [Validators.required, Validators.email]],
    password: ['12345678', [Validators.required, Validators.minLength(8)]]
  });

  constructor( private fb: FormBuilder,
                private router: Router,
                private authService: AuthService) { }

  login(){
    console.log(this.miFormulario.value);
    // console.log(this.miFormulario.valid);
    const { email, password } = this.miFormulario.value;

    this.authService.login( email, password)
      .subscribe( ok => {
        console.log(ok)
        if (ok === true){
          this.router.navigateByUrl('/catalogo-cursos');
        }else{
          Swal.fire('Error', ok, 'error');
        }
      })
  }


}
