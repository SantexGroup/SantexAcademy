import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      const email = this.email; 
      const password = this.password; 

      this.authService.login(email, password).subscribe(
        (response: any) => {
          console.log('Inicio de sesión exitoso', response);
          // Manejar la respuesta para almacenar el token en el local storage
        },
        (error: any) => {
          console.error('Error al iniciar sesión:', error);
        }
      );
    }
  }

  ngOnInit(): void {}
}
