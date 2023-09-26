import { Component, OnInit } from '@angular/core';
import { OrgServicesService } from 'src/app/services/org-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.css'],
})
export class OrganizationDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private orgS: OrgServicesService
  ) {}
  organizationId: number = 0;
  // organization: Array<[]> = [];
  organization: any = {
    image: '',
    name: '',
    category: '',
    cuit: '',
    email: '',
    location: '',
    phone: '',
    description: ''
  };

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      this.organizationId = +queryParams['id'];
      this.orgS.getOrganizationById(this.organizationId.toString()).subscribe({
        next: (response) => {
          this.organization = response;
          console.log('Organization', response);
        },
        error: (error) => {
          console.error('Error in bringing the organization', error);
        },
        complete: () => {},
      });
    });
  }
}
