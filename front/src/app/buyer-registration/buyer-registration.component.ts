import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-buyer-registration',
  templateUrl: './buyer-registration.component.html',
  styleUrls: ['./buyer-registration.component.css']
})
export class BuyerRegistrationComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  registerUser() {
    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    
    // Lógica para hacer la llamada API para el registro del usuario
  }
}