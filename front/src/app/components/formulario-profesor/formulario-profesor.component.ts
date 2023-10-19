import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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

  constructor(private fb: FormBuilder, private http: HttpClient,) {}

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
      const formData = this.myForm.value;
     
      const datosEnviar= {
        nombreCompleto: formData.nombreCompleto,
        nombreUsuario: formData.nombreUsuario,
        contraseña: formData.contraseña,
        correoElectronico: formData.correoElectronico,
        profesion: formData.profesion,
        tipoContenido: formData.tipoContenido,
        modalidadEnseñanza: formData.modalidadEnseñanza,
        genero: formData.genero,
      }

      this.http.post('http://localhost:4001/profesors/createProfesor', datosEnviar).subscribe(
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
  mostrarMensaje(arg0: string, arg1: string) {
    throw new Error('Method not implemented.');
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
