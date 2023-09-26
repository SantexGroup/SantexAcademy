import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm = new FormGroup({
    nombreUs: new FormControl('', [Validators.required]),
    passwordUs: new FormControl('', [Validators.required])
  });

  constructor() { }
  
  ingresarUs () {
    // procedimieto de Ingreso
    console.log('Ingreso a ABC Muebleria');
  }

  ngOnInit(): void {
  }

}
