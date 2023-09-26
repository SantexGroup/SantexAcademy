import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  textBtn: string = '';

  showPassword: boolean = false;
  subscription: Subscription | null = null;

  imageUrl: string | ArrayBuffer | null = null;

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
      cuit: ['', Validators.required],
      location: ['', Validators.required],
      category: ['', Validators.required],
      file: [null],
    });
  }

  sendValues() {
    if (this.registerCoordinator.valid) {
      const formData = new FormData();
      Object.keys(this.registerCoordinator.controls).forEach((key) => {
        const control = this.registerCoordinator.get(key);
        if (key === 'file' && control instanceof FileList) {
          for (let i = 0; i < control.length; i++) {
            const file = control.item(i);
            if (file) {
              formData.append('file', file);
            }
          }
        } else {
          if (control !== null && control !== undefined) {
            const value = control.value;
            if (value !== null && value !== undefined) {
              formData.append(key, value);
            }
          }
        }
      });

      this.authService.registerCoordinator(formData).subscribe({
        next: (response) => {
          this.onModal = true;
          this.statusSession = 'success';
          this.routeBtnContinue = 'auth/login';
          this.textBtn = 'Iniciar Sesión';
        },
        error: (error) => {
          if (error.error.emailFound) {
            console.error('Error in coordinator registration:', error);
            this.onModal = true;
            this.statusSession = 'failed-emailFound';
            this.routeBtnContinue = 'auth/login';
            this.textBtn = 'Iniciar Sesión';
          } else {
            console.error('Error in coordinator registration:', error);
            this.onModal = true;
            this.statusSession = 'failed';
            this.routeBtnContinue = 'auth/coordinator-register';
            this.textBtn = 'Reintentar';
          }
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

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          this.imageUrl = e.target.result as string;
        }
      };
      reader.readAsDataURL(file);

      this.registerCoordinator.patchValue({
        file: file,
      });
    }
  }

  deleteImage() {
    this.registerCoordinator.patchValue({
      file: null,
    });
    this.imageUrl = null;
  }
}
