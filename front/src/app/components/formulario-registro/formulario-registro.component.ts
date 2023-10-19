import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServiceRegService } from 'src/app/service/service-reg.service';
import { HttpClient } from '@angular/common/http';

interface Generos {
  genero: string;
}

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css'],
})
export class FormularioRegistroComponent implements OnInit {
  hide = true;
  genero: Generos[] = [
    { genero: 'Masculino' },
    { genero: 'Femenino' },
  ];

  myForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      nombreCompleto: ['', [Validators.required]],
      nombreUsuario: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],
      correoElectronico: ['', [Validators.required, Validators.email]],
      genero: ['', [Validators.required]],
    },);
  }



  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
     
      const datosEnviar= {
        nombreCompleto: formData.nombreCompleto,
        nombreUsuario: formData.nombreUsuario,
        contraseña: formData.contraseña,
        correoElectronico: formData.correoElectronico,
        genero: formData.genero,
      }

      this.http.post('http://localhost:4001/users/createUser', datosEnviar).subscribe(
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

  mostrarMensaje(mensaje: string, tipo: 'success' | 'error') {
    this.snackBar.open(mensaje, 'Cerrar', {
      duration: 5000,
      panelClass: tipo === 'success' ? 'success-message' : 'error-message',
    });
  }
}
