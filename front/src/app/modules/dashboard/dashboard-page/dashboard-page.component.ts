import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { DashboardServicesService } from '../services/dashboard-services.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  constructor(
    private authServices: AuthService,
    private dashService: DashboardServicesService
  ) { }

  dataUser: any = {};
  dataOrg: any = {};

  ngOnInit(): void {
    const token = this.authServices.getAuthToken();
    const userType: string | undefined = this.authServices.getUserType();

    if (userType === "vol") {
      this.dashService.getProfileVolunteer(token).subscribe({
        next: (response) => {
          this.dataUser = response;
          
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => { },
      });
    } else if (userType === "org"){
      this.dashService.getProfileOrganization(token).subscribe({
        next: (response) => {
          this.dataOrg = response;

          console.log("dataDeOrg", response);
        },
        error: (error) => {
          console.log(error);
        },
        complete: () => { },
      });
    }
  }
}
