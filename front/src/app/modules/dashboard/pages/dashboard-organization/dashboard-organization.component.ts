import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-organization',
  templateUrl: './dashboard-organization.component.html',
  styleUrls: ['./dashboard-organization.component.css'],
})
export class DashboardOrganizationComponent {
  @Input() dataOrganization: any = {};
}
