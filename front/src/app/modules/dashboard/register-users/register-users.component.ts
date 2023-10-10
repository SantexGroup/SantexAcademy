import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css']
})
export class RegisterUsersComponent implements OnInit {

  myForm = new FormGroup({
    nombreUs: new FormControl('', [Validators.required]),
    nombreCompleto: new FormControl('', [Validators.required]),
    apellidoCompleto: new FormControl('', [Validators.required]),
    emailUs: new FormControl('', [Validators.required]),
    passwordUs: new FormControl('', [Validators.required])
  });
  constructor() { }

  registrarUs () {
    // procedimieto de Ingreso
    console.log('Registro a ABC Muebleria');
  }

  ngOnInit(): void {
  }

}
