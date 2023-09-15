import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { volunterData } from '../../models/dataForms.model';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-volunteerregister',
  templateUrl: './form-volunteerregister.component.html',
  styleUrls: ['./form-volunteerregister.component.css'],
})
export class FormVolunteerregisterComponent {
  registroForm: FormGroup;

  showPassword: boolean = false;
  subscription: Subscription | null = null;

  onModal: boolean = false;
  statusSession: string = '';
  messageModal: string = '';
  routeBtnContinue: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.registroForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  sendValues() {
    if (this.registroForm.valid) {
      const userData: volunterData = this.registroForm.value as volunterData;
      this.authService.registerVolunteer(userData).subscribe({
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
          this.routeBtnContinue = 'auth/volunteer-register';
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
