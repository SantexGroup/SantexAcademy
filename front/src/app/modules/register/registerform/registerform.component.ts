import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { RegistroService } from '../../../core/services/registro.service';


@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {

  showRegisterForm: boolean = true;// Para ocultar formulario
  showRegisterAnswer: boolean = false; // Para mostar pagina de repuesta registeranswer

  userData: any = {
    username: '',
    password: '',
    apellido: '',
    nombre: '',
    email: '',
    estado: true,
    confirmPassword: '',
    createdAt: new Date,
    updatedAt: new Date
  };

  constructor(
    private http: HttpClient,
    private registroService: RegistroService,
    private router: Router,
    private route: ActivatedRoute
    ) {};

  ngOnInit(): void {

  }

redirregistersuccess() {
  this.router.navigate(['registeranswer']);// Funcion que redirige a la página de respuesta
}

submitForm() {
   this.http.post<any>('http://localhost:4001/user/', this.userData).subscribe(
     response => {
      if (response.redirectTo) {
         this.router.navigate([response.redirectTo]);
      } else {
         console.log('False? showRegisterAnswer:', this.showRegisterAnswer);//BORRAR establece a false
         console.log('Registro exitoso:', response);
         this.showRegisterForm = false; // Oculta el formulario
         console.log('False? showRegisterForm:', this.showRegisterForm);//BORRAR establese a False
         this.showRegisterAnswer = true; // Establecer a true después de enviar el formulario
         console.log('True? showRegisterAnswer:', this.showRegisterAnswer);//BORRAR establece a true
         this.redirregistersuccess();// Redirige a la respuesta exitosa
         console.log('Despues de redirigir');//BORRAR
      }

      (error: any) => {
         console.error('Error al registrar:', error);
      }
    
    }
  );
}
}
