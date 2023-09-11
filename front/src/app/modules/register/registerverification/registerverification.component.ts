import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registerverification',
  templateUrl: './registerverification.component.html',
  styleUrls: ['./registerverification.component.css']
})

export class RegisterverificationComponent implements OnInit {
  responseMessage: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.responseMessage = this.route.snapshot.queryParamMap.get('response') || '';
    if (this.responseMessage) {
      // Se encontró un mensaje de respuesta
      if (this.responseMessage === 'success') {
        // Respuesta exitosa
        alert('Registro exitoso');
        window.location.href = 'http://localhost:4200/login'; // Redirige a la página de inicio de sesión
      } else {
        // Respuesta de error
        alert('Hubo un error en el registro');
        window.location.href = 'http://localhost:4200/registro'; // Redirige a la página de registro
      }
    }
  }
}