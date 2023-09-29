import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['test1', [Validators.required]],
    apellido: ['test1', [Validators.required]],
    username: ['test1', [Validators.required]],
    email: ['test1@test.com', [Validators.required, Validators.email]],
    password: ['12345678', [Validators.required, Validators.minLength(8)]],
    estado: [ true , [Validators.required]],
    IdTipoDeUsuario: ['alumno', [Validators.required]]
  });

  constructor( private fb: FormBuilder,
                private router: Router,
                private authService: AuthService) { }

  register(){
    console.log(this.miFormulario.value);
    // console.log(this.miFormulario.valid);

    const { nombre, apellido, username, email, password, estado, rol } = this.miFormulario.value;

    this.authService.register(nombre, apellido, username, email, password, estado, rol)
      .subscribe( ok => {
        console.log(ok)
        if (ok === true){
          this.router.navigateByUrl('/admin');// this.router.navigateByUrl('/protected') para que es /protected?, cual es la logica?
        }else{
          Swal.fire('Error', ok, 'error');
        }
      })
  }

}
