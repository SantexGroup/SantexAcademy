import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/config';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  role: string = '';
  email: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';  

  constructor(private http: HttpClient, private router: Router) { }

  createUser() {

    const userData = {
      role: this.role,
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    };
    
    this.http.post(`${baseURL}/api/user/create`, userData).subscribe(
      (response) => {
        console.log('Usuario registrado exitosamente', response);
        alert("Usuario creado exitosamente")
      },
      (error) => {
        console.error('Error al registrar usuario:', error);
        alert("Error al crear el Usuario")
      }
    );    
  }

  navigateToUserList() {
    this.router.navigate(['/user/user-list']);
  }

  ngOnInit(): void {
  }

}
