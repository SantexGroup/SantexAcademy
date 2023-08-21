import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
})
export class FormLoginComponent {
  email: string = '';
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

  navigateToOptionsRegister() {
    this.router.navigate(['/options-register']);
  }
}
