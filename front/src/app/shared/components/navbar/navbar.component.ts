import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isOpen: boolean = false;
  openOptionOne: boolean = false;
  openOptionTwo: boolean = false;

  constructor() {
    // Obtener el valor de isOpen desde el LocalStorage (si existe)
    const isOpenValue = localStorage.getItem('isOpen');
    if (isOpenValue !== null) {
      this.isOpen = JSON.parse(isOpenValue);
    }
  }

  handleMenu() {
    this.isOpen = !this.isOpen;
    // Guardar el valor actual de isOpen en el LocalStorage
    localStorage.setItem('isOpen', JSON.stringify(this.isOpen));
  }

  openOpOne() {
    if (!this.openOptionOne) {
      this.openOptionOne = true;
    } else {
      this.openOptionOne = false;
    }
  }
  openOpTwo() {
    if (!this.openOptionTwo) {
      this.openOptionTwo = true;
    } else {
      this.openOptionTwo = false;
    }
  }
}
