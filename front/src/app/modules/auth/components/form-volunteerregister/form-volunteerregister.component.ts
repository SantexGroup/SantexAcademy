import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { volunterData } from '../../models/volunteerRegister.model';

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
  dataUser!: volunterData;

  constructor(private router: Router) {}

  sendValues() {
    const userData: volunterData = {
      fullName: this.full_name,
      telefono: this.phone,
      email: this.email,
      password: this.password,
    };

    this.dataUser = userData;
    this.ngOnInit();
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
    this.http.post('http:localhost:4200', this.dataUser).subscribe((data) => {
      console.log(data);
    });
  }
}
