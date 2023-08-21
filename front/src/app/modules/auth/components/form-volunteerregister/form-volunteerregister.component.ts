import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-volunteerregister',
  templateUrl: './form-volunteerregister.component.html',
  styleUrls: ['./form-volunteerregister.component.css'],
})
export class FormVolunteerregisterComponent {
  full_name: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private router: Router) {}

  sendValues() {
    console.log(this.full_name, this.email, this.phone, this.password);
  }

  sendShowPassword() {
    !this.showPassword
      ? (this.showPassword = true)
      : (this.showPassword = false);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
