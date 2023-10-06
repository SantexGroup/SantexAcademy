import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  formSubmitted: boolean = false;

  constructor(private authService: AuthService,private toastr: ToastrService, private router: Router) { }

  login(loginForm: NgForm) {
    if (!loginForm.valid) {
      this.formSubmitted = true;
      return;
    }
    this.formSubmitted = false;
    const email = this.email;
    const password = this.password;

    this.authService.login(email, password).subscribe(
      (response: any) => {
        if (response === 'Login exitoso') { //login exitoso es la "respuesta" del backend
          return this.router.navigate(['/home']);
        } else {
          // redireccionar a /login y ver como mandar error de algun tipo
          return console.log('desde if negativo', response);
        }
      },
      (error: any) => {
        console.error('Error al iniciar sesión:', error);
        this.toastr.error('Error al iniciar sesión', 'Error');
      }
    );
  }

  ngOnInit(): void { }
}
