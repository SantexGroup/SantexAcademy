import { Component, OnInit } from '@angular/core';
import { OrgServicesService } from '../../services/org-services.service';

@Component({
  selector: 'app-slider-organizations',
  templateUrl: './slider-organizations.component.html',
  styleUrls: ['./slider-organizations.component.css'],
})
export class SliderOrganizationsComponent implements OnInit {
  constructor(private orgServices: OrgServicesService) {}
  organizations: any[] = [];

  images: string[] = [
    '/assets/logotypes_organizations/orgOne.svg',
    '/assets/logotypes_organizations/Banco_de_alimentos_Córdoba.png',
    '/assets/logotypes_organizations/orgThree.svg',
    '/assets/logotypes_organizations/Cruz_Roja_Argentina.png',
    '/assets/logotypes_organizations/Fundación_sí.png',
    '/assets/logotypes_organizations/Greenpeace.png',
    '/assets/logotypes_organizations/Techo.png',
    '/assets/logotypes_organizations/Voluntarios-largo.png',
  ];

  ngOnInit() {
    this.orgServices.getOrganizations().subscribe({
      next: (response) => {
        console.log('Organizaciones', response);
        this.organizations = response;
      },
      error: (error) => {
        console.error('Error GET Organizaciones', error);
      },
      complete: () => {},
    });
  }
}
