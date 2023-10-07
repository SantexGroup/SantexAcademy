import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-volunteerregister',
  templateUrl: './form-volunteerregister.component.html',
  styleUrls: ['./form-volunteerregister.component.css'],
})
export class FormVolunteerregisterComponent {
  registerVolunteer: FormGroup;

  showPassword: boolean = false;
  subscription: Subscription | null = null;

  onModal: boolean = false;
  statusSession: string = '';
  messageModal: string = '';
  routeBtnContinue: string = '';
  textBtnModal: string = '';
  imageUrl: string | ArrayBuffer | null = null;
  errors: any = [];
  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.registerVolunteer = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      file: [null],
    });
  }

  sendValues() {
    if (this.registerVolunteer.valid) {
      const formData = new FormData();
      Object.keys(this.registerVolunteer.controls).forEach((key) => {
        const control = this.registerVolunteer.get(key);
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
      this.authService.registerVolunteer(formData).subscribe({
        next: (response) => {
          this.onModal = true;
          this.statusSession = 'success';
          this.messageModal =
            ' ¡Bienvenido a Voluntime! Tu cuenta se ha creado exitosamente. Ahora puedes iniciar sesión y explorar emocionantes oportunidades de voluntariado. ¡Comienza a marcar la diferencia hoy mismo!';
          this.routeBtnContinue = 'auth/login';
          this.textBtnModal = 'Iniciar Sesión';
        },
        error: (error) => {
          if (error.error.emailFound) {
            this.onModal = true;
            this.statusSession = 'failed';
            this.messageModal =
              'Ya existe una cuenta registrada con ese email, por favor inicie sesión.';
            this.routeBtnContinue = 'auth/login';
            this.textBtnModal = 'Iniciar Sesión';
          } else {
            this.errors = error.error.errors;
            this.onModal = true;
            this.statusSession = 'failed';
            this.routeBtnContinue = 'auth/volunteer-register';
            this.textBtnModal = 'Reintentar';
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

      this.registerVolunteer.patchValue({
        file: file,
      });
    }
  }

  deleteImage() {
    this.registerVolunteer.patchValue({
      file: null,
    });
    this.imageUrl = null;
  }
}
