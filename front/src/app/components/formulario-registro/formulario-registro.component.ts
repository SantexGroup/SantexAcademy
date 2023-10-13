import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ServiceRegService } from 'src/app/service/service-reg.service';
import { HttpResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Generos {
  gender: string;
}

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css'],
})
export class FormularioRegistroComponent implements OnInit {
  hide = true;
  generoControl = new FormControl<Generos | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  gender: Generos[] = [
    { gender: 'Masculino' },
    { gender: 'Femenino' },
  ];

  myForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registroService: ServiceRegService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      nombreCompleto: ['', [Validators.required]],
      user: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmarPassword: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
    }, { validator: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmarPassword')?.value;
    return password === confirmPassword ? null : { notMatching: true };
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.registroService.registrarUsuario(formData).subscribe(
        (response: any) => {
          // Manejar la respuesta del backend (éxito)
          console.log('Usuario registrado exitosamente', response);
          this.mostrarMensaje('Usuario registrado exitosamente', 'success');
        },
        (error: HttpErrorResponse) => {
          // Manejar el error del backend (fallo)
          console.error('Error al registrar usuario', error);
          this.mostrarMensaje('Error al registrar usuario', 'error');
        }
      );
    }
  }

  getErrorMessage(controlName: string) {
    const control = this.myForm.get(controlName);
    if (controlName === 'email' && control?.hasError('email')) {
      return 'No es un correo válido';
    }
    return '';
  }

  mostrarMensaje(mensaje: string, tipo: 'success' | 'error') {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 5000, 
      panelClass: tipo === 'success' ? 'success-message' : 'error-message' 
    })
  }
}
