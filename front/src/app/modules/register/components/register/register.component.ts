import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';  

  constructor(private http: HttpClient, private router: Router ) { }

  registerUser() {
    const userData = { email: this.email, password: this.password, firstName: this.firstName, lastName: this.lastName };
    this.http.post(' http://localhost:4001/api/user/create', userData).subscribe(
      (response) => {
        console.log('Usuario registrado exitosamente', response);
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
      }
    );
    
  }  
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}





