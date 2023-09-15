import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { coordinatorData } from '../../models/dataForms.model';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-coordinators-register',
  templateUrl: './form-coordinators-register.component.html',
  styleUrls: ['./form-coordinators-register.component.css'],
})
export class FormCoordinatorsRegisterComponent {
  registerCoordinator: FormGroup;

  onModal: boolean = false;
  statusSession: string = '';
  messageModal: string = '';
  routeBtnContinue: string = '';

  showPassword: boolean = false;
  subscription: Subscription | null = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.registerCoordinator = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      ong: ['', Validators.required],
      cuit: ['', Validators.required],
      location: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  sendValues() {
    if (this.registerCoordinator.valid) {
      const userData: coordinatorData = this.registerCoordinator
        .value as coordinatorData;
      this.authService.registerCoordinator(userData).subscribe({
        next: (response) => {
          console.log('Registro exitoso:', response);
          this.onModal = true;
          this.statusSession = 'success';
          this.routeBtnContinue = 'auth/login';
        },
        error: (error) => {
          console.error('Error en el registro:', error);
          this.onModal = true;
          this.statusSession = 'failed';
          this.routeBtnContinue = 'auth/coordinator-register';
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

  changeValueModal() {
    this.onModal = false;
  }
}
