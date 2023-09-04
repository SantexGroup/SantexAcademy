import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.email, this.password).subscribe(
      (response: any) => {
        console.log('Inicio de sesión exitoso', response);
        // Maneja la respuesta aquí, por ejemplo, almacena el token en el local storage
      },
      (error: any) => {
        console.error('Error al iniciar sesión:', error);
      }
    );
  }

  ngOnInit(): void {
  }

}
