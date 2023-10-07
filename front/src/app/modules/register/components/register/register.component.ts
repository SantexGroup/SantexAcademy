import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/config';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  acceptedTerms: boolean = false;

  acceptedTermsErrorMessage = 'Aceptar los términos y condiciones.';  

  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';  

  constructor(private http: HttpClient, private toastr: ToastrService,private router: Router ) { }

  registerUser() {
    const userData = { 
      email: this.email, 
      password: this.password, 
      firstName: this.firstName, 
      lastName: this.lastName 
    };

    this.http.post(`${baseURL}/api/user/create`, userData).subscribe(
      (response) => {
        console.log('Usuario registrado exitosamente', response);
        this.toastr.success('Usuario registrado exitosamente', '¡Felicidades!');

      },
      (error) => {
        console.error('Error al registrar usuario:', error);
        this.toastr.error('Error al registrarse', 'Error');
      }
    );    
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}





