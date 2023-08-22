import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { user } from '../../models/volunteerRegister.model';

@Component({
  selector: 'app-form-volunteerregister',
  templateUrl: './form-volunteerregister.component.html',
  styleUrls: ['./form-volunteerregister.component.css'],
})
export class FormVolunteerregisterComponent {
  http = inject(HttpClient);

  full_name: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  showPassword: boolean = false;
  dataUser!: user;

  constructor(private router: Router) {}

  sendValues() {
    console.log({
      full_name: this.full_name,
      telefono: this.phone,
      email: this.email,
      password: this.password,
    });
  }

  sendShowPassword() {
    !this.showPassword
      ? (this.showPassword = true)
      : (this.showPassword = false);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.http
      .get('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        console.log(data);
      });
  }
}
