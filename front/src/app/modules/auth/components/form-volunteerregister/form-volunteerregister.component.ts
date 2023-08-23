import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { volunterData } from '../../models/dataForms.model';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

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
  subscription: Subscription | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  sendValues() {
    const userData: volunterData = {
      fullName: this.full_name,
      telefono: this.phone,
      email: this.email,
      password: this.password,
    };

    this.authService.registerVolunteer(userData).subscribe({
      next: (response) => {
        console.log('Registro exitoso:', response);
      },
      error: (error) => {
        console.error('Error en el registro:', error);
      },
      complete: () => {},
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

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
