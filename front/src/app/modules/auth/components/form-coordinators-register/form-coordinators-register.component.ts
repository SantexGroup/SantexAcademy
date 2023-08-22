import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-coordinators-register',
  templateUrl: './form-coordinators-register.component.html',
  styleUrls: ['./form-coordinators-register.component.css']
})
export class FormCoordinatorsRegisterComponent {
  full_name: string = '';
  email: string = '';
  phone: string = '';
  ngo: string = '';
  cuit: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private router: Router) { }

  sendValues() {
    console.log(this.full_name, this.email, this.phone, this.ngo, this.cuit,  this.password);
  }

  sendShowPassword() {
    !this.showPassword
      ? (this.showPassword = true)
      : (this.showPassword = false);
  }

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
