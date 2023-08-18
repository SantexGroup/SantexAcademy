import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RegistroService } from '../../../core/services/registro.service';


@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  userData: any = {
    username: '',
    password: '',
    apellido: '',
    nombre: '',
    email: ''
  };

  constructor(private http: HttpClient, private registroService: RegistroService) {};

  ngOnInit(): void {
    
  }

submitForm() {
  this.http.post<any>('http://localhost:4001/user/', this.userData).subscribe(
    response => {
      console.log('Registro exitoso:', response);
    },
    error => {
      console.error('Error al registrar:', error);
    }
  );
}
}