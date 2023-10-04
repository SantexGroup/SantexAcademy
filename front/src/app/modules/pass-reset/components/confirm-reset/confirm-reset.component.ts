import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

type PasswordVisibility = 'password' | 'text';


@Component({
  selector: 'app-confirm-reset',
  templateUrl: './confirm-reset.component.html',
  styleUrls: ['./confirm-reset.component.css']
})
export class ConfirmResetComponent implements OnInit {

  password: string = '';
  password2: string = '';
  formSubmitted: boolean = false;
  showPassword: PasswordVisibility = 'password';



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  confirmPassword(loginForm: NgForm) {
    if (!loginForm.valid) {
      this.formSubmitted = true;
      return;
    }
    this.formSubmitted = false;

    if (this.password !== this.password2) {
      return alert('Toast, Las contraseñas no coinciden');
    }

    const confirmedPassword = this.password; //el passwordConfirmado a resetear listo para mandar al backend

    // aca conectar el service con el endpoint del backend, para iniciar proceso de reset
    // this.authService.confirmReset(confirmedPassword).subscribe(
    //   (response: any) => {
    //     if (response === 'comienza proceso de reseteo exitoso') { //login exitoso es la "respuesta" del backend
    //       return this.router.navigate(['pass-reset/confirm']);
    //     } else {
    //       // aca mandar un error por toast
    //       return this.router.navigate(['/pass-reset']);

    //     }
    //   },
    //   (error: any) => {
    //     console.error('Error al iniciar sesión:', error);
    //   }
    // );

    // Momentaneamente simulemos que esta todo OK, FALTA UN TOAST y mandamos a la pagina de insertar nuevo pass
    alert('Poner un toast aca, Reseteo de contraseña exitoso, te redirecciono a iniciar sesion');
    return this.router.navigate(['login']);

  }

  togglePasswordVisibility() {
    this.showPassword = this.showPassword === 'password' ? 'text' : 'password';
  }

}
