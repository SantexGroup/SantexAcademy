import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MensajeErrorComponent } from '../mensaje-error/mensaje-error.component';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css'],
})
export class FormularioRegistroComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      nombreCompleto: ['', [Validators.required]],
      correoElectronico: ['', [Validators.required, Validators.email]],
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmarPassword: ['', [Validators.required]],
      genero: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.myForm.invalid) {
      const errorMessage = 'Por favor complete todos los campos antes de continuar.';
      this.openErrorMessageDialog(errorMessage);
    } 
  }

  openErrorMessageDialog(errorMessage: string): void {
    const dialogRef = this.dialog.open(MensajeErrorComponent, {
      width: '250px',
      data: errorMessage,
    });
  }

  
}
