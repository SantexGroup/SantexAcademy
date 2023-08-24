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

  // Errors Validations
  errorName: string = '';
  errorEmail: string = '';
  errorEmailTwo: string = '';
  errorPhone: string = '';
  errorPassword: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  sendValues() {
    const userData: volunterData = {
      fullName: this.full_name,
      telefono: this.phone,
      email: this.email,
      password: this.password,
    };

    if (userData.fullName.length == 0) {
      this.errorName = 'Por favor, ingresa un nombre válido.';
    } else if (userData.email.length == 0) {
      this.errorEmail =
        'Por favor, ingresa una dirección de correo electrónico válida.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData.email)
    ) {
      this.errorEmailTwo =
        'Eso no parece una dirección de correo electrónico válida.';
    } else if (userData.telefono.length == 0) {
      this.errorPhone = 'Por favor, ingresa un teléfono válido.';
    } else if (userData.password.length == 0) {
      this.errorPassword = 'Por favor, ingresa una contraseña.';
    } else {
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
  }

  sendShowPassword() {
    !this.showPassword
      ? (this.showPassword = true)
      : (this.showPassword = false);
  }

  navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
