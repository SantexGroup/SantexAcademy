import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Generos {
  genero: string;
}

@Component({
  selector: 'app-formulario-profesor',
  templateUrl: './formulario-profesor.component.html',
  styleUrls: ['./formulario-profesor.component.css']
})
export class FormularioProfesorComponent implements OnInit {
  hide = true;
  myForm!: FormGroup;
  genero: Generos[] = [
    { genero: 'Masculino' },
    { genero: 'Femenino' },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      nombreUsuario: ['', Validators.required],
      contraseña: ['', Validators.required],
      correoElectronico: ['', [Validators.required, Validators.email]],
      profesion: ['', Validators.required],
      tipoContenido: ['', Validators.required],
      modalidadEnseñanza: ['', Validators.required],
      genero: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      // Realizar acciones cuando el formulario es válido
    }
  }

  getErrorMessage(controlName: string) {
    const control = this.myForm.get(controlName);
    if (control?.hasError('required')) {
      return 'Completa este campo';
    }
    if (controlName === 'correoElectronico' && control?.hasError('email')) {
      return 'No es un correo válido';
    }
    return '';
  }
}
