import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerbutton',
  templateUrl: './registerbutton.component.html',
  styleUrls: ['./registerbutton.component.css']
})

export class RegisterbuttonComponent {
  // Propiedad para controlar el boton durante la visibilidad del formulario
  showRegisterForm: boolean = false;
  // Propiedad para controlar el boton durante la visibilidad de la pagina de cierre
  showRegisterAnswer: boolean = false;

  // Función para cambiar la visibilidad del formulario y el texto del boton
  toggleRegisterForm() {
    this.showRegisterForm = !this.showRegisterForm;
  }
 // Función para cambiar la visibilidad del formulario y el texto del boton
  toggleRegisterAnswer() {
  this.showRegisterAnswer = !this.showRegisterAnswer;
}

}
