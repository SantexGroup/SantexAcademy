import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteer-register',
  templateUrl: './volunteer-register.component.html',
  styleUrls: ['./volunteer-register.component.css'],
})
export class VolunteerRegisterComponent {
  full_name: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private router: Router) {}

  sendValues() {
    console.log(this.email, this.password);
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
