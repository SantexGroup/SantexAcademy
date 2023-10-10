import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/config';
import { ToastrService } from 'ngx-toastr';

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

  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  createUser() {

    const userData = {
      role: this.role,
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    };
    
    this.http.post(`${baseURL}/api/user/create`, userData).subscribe({
      next:(response) => {
        console.log('Usuario registrado exitosamente', response);
        this.toastr.success("Usuario creado exitosamente")
        this.navigateToUserList();
      },
      error:(error) => {
        console.error('Error al registrar usuario:', error);
        this.toastr.error("Error al crear el Usuario")
      }
  });    
  }

  navigateToUserList() {
    this.router.navigate(['/user/user-list']);
  }

  ngOnInit(): void {
  }

}
