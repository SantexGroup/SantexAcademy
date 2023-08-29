import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerbutton',
  templateUrl: './registerbutton.component.html',
  styleUrls: ['./registerbutton.component.css']
})

export class RegisterbuttonComponent {
  // Propiedad para controlar la visibilidad del formulario
  showRegisterForm: boolean = false;

  // Función para cambiar la visibilidad del formulario
  toggleRegisterForm() {
    this.showRegisterForm = !this.showRegisterForm;
  }
}
