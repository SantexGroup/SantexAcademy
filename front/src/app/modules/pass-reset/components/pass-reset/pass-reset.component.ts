import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pass-reset',
  templateUrl: './pass-reset.component.html',
  styleUrls: ['./pass-reset.component.css']
})
export class PassResetComponent implements OnInit {

  email: string = '';
  password: string = '';
  formSubmitted: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  resetPassword(loginForm: NgForm) {
    if (!loginForm.valid) {
      this.formSubmitted = true;
      return;
    }
    this.formSubmitted = false;

    // const email = this.email; //el mail a resetear listo para mandar al backend

    // aca conectar el service con el endpoint del backend, para iniciar proceso de reset
    // this.authService.reset(email).subscribe(
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

    // Momentaneamente simulemos que esta todo OK y mandamos a la pagina de insertar nuevo pass
    alert('Poner un toast aca, el mail existe en la base de datos');
    return this.router.navigate(['pass-reset/confirm']);

  }

}
