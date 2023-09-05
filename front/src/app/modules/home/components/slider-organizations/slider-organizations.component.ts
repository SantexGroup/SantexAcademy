import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-organizations',
  templateUrl: './slider-organizations.component.html',
  styleUrls: ['./slider-organizations.component.css'],
})
export class SliderOrganizationsComponent {
  images: string[] = [
    '/assets/logotypes_organizations/orgOne.svg',
    '/assets/logotypes_organizations/Banco_de_alimentos_Córdoba.png',
    '/assets/logotypes_organizations/orgThree.svg',
    '/assets/logotypes_organizations/Cruz_Roja_Argentina.png',
    '/assets/logotypes_organizations/Fundación_sí.png',
    '/assets/logotypes_organizations/Greenpeace.png',
    '/assets/logotypes_organizations/Techo.png',
    '/assets/logotypes_organizations/Voluntarios-largo.png',

    // '/assets/logotypes_organizations/orgOne.svg',
    // '/assets/logotypes_organizations/Banco_de_alimentos_Córdoba.png',
    // '/assets/logotypes_organizations/orgThree.svg',
  ];
}
