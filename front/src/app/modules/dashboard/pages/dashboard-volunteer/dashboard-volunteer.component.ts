import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-volunteer',
  templateUrl: './dashboard-volunteer.component.html',
  styleUrls: ['./dashboard-volunteer.component.css'],
})
export class DashboardVolunteerComponent {
  @Input() dataVolunteer: any = {};
}
