import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-organizations',
  templateUrl: './slider-organizations.component.html',
  styleUrls: ['./slider-organizations.component.css'],
})
export class SliderOrganizationsComponent {
  images: string[] = [
    '/assets/logotypes_organizations/orgOne.svg',
    '/assets/logotypes_organizations/orgTwo.svg',
    '/assets/logotypes_organizations/orgThree.svg',
    '/assets/logotypes_organizations/orgOne.svg',
    '/assets/logotypes_organizations/orgTwo.svg',
    '/assets/logotypes_organizations/orgThree.svg',
  ];
}
