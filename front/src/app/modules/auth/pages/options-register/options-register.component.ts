import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options-register',
  templateUrl: './options-register.component.html',
  styleUrls: ['./options-register.component.css'],
})
export class OptionsRegisterComponent {
  constructor(private router: Router) {}

  itemsVolunteer: string[] = [
    'Flexibilidad',
    'Variedad de oportunidades',
    'Desarrollo personal',
    'Relaciones significativas',
    'Impacto directo',
  ];

  itemsCordinator: string[] = [
    'Potencia tu misión',
    'Acceso a talento diverso',
    'Flexibilidad en la colaboración',
    'Mayor visibilidad',
    'Networking y colaboración',
  ];

  navigateToVolunteerRegister() {
    this.router.navigate(['/volunteer-register']);
  }
  navigateToCoordinatorRegister() {
    this.router.navigate(['/coordinator-register']);
  }
}
