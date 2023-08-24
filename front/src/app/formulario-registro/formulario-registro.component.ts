import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MensajeErrorComponent } from '../mensaje-error/mensaje-error.component';

interface Genero {
  genero: string;
}

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css'],
})
export class FormularioRegistroComponent implements OnInit {

  hide = true;

  generoControl = new FormControl<Genero | null>(null, Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  genero: Genero[] = [

    {genero: 'Masculino'},
    {genero: 'Femenino'},
  ];


  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      nombreCompleto: ['', [Validators.required]],
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmarPassword: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      genero: ['', [Validators.required]],

    });


  }

  

  onSubmit() {
  }

  getErrorMessage(controlName: string) {
    const control = this.myForm.get(controlName);

    if (controlName === 'email' && control?.hasError('email')) {
      return 'No es un correo válido';
    }

    return '';
  }
  
}
