import { Component } from '@angular/core';

@Component({
  selector: 'app-options-register',
  templateUrl: './options-register.component.html',
  styleUrls: ['./options-register.component.css'],
})
export class OptionsRegisterComponent {
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
}
