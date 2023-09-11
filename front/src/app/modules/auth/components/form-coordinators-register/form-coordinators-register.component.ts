import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { coordinatorData } from '../../models/dataForms.model';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

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
  subscription: Subscription | null = null;

  // Errors Validations
  errorName: string = '';
  errorEmail: string = '';
  errorEmailTwo: string = '';
  errorPhone: string = '';
  errorNgo: string = '';
  errorCuit: string = '';
  errorPassword: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  sendValues() {
    console.log(this.full_name, this.email, this.phone, this.ngo, this.cuit, this.password);

    const userData: coordinatorData = {
      fullName: this.full_name,
      email: this.email,
      phone: this.phone,
      ngo: this.ngo,
      cuit: this.cuit,
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
    } else if (userData.phone.length == 0) {
      this.errorPhone = 'Por favor, ingresa un teléfono válido.';
    } else if (userData.ngo.length == 0) {
      this.errorNgo = 'Por favor, ingresa el nombre de tu Organización/Fundación';
    } else if (userData.cuit.length == 0) {
      this.errorCuit = 'Por favor, ingresa un cuit válido.';
    } else if (userData.password.length == 0) {
      this.errorPassword = 'Por favor, ingresa una contraseña.';
    } else {
      this.authService.registerCoordinator(userData).subscribe({
        next: (response) => {
          console.log('Registro exitoso:', response);
        },
        error: (error) => {
          console.error('Error en el registro:', error);
        },
        complete: () => { },
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






