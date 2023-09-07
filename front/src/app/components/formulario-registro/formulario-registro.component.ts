import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

interface Generos {
  generos: string;
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
  generos: Generos[] = [

    {generos: 'Masculino'},
    {generos: 'Femenino'},
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
      generos: ['', [Validators.required]],

    }, { validator: this.checkPasswords });


  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmarPassword')?.value;
  
    return password === confirmPassword ? null : { notMatching: true };
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
