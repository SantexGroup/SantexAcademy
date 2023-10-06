import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../services/volunteer.service';
import { OrganizationService } from '../services/organization.service';

import { selectToken, selectUserType } from 'src/app/core/auth.selectors';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
})
export class DashboardPageComponent implements OnInit {
  constructor(
    private store: Store,
    private volService: VolunteerService,
    private orgService: OrganizationService,

    private router: Router
  ) {}

  dataUser: any = {};
  dataOrg: any = {};

  ngOnInit(): void {
    this.store.select(selectToken).subscribe((token) => {
      if (token) {
        this.store.select(selectUserType).subscribe((userType) => {
          if (userType === 'vol') {
            this.volService.getProfileVolunteer(token).subscribe({
              next: (response) => {
                this.dataUser = response;
              },
              error: (error) => {
                console.log(error);
              },
              complete: () => {},
            });
          } else if (userType === 'org') {
            this.orgService.getProfileOrganization(token).subscribe({
              next: (response) => {
                this.dataOrg = response;
              },
              error: (error) => {
                console.log(error);
              },
              complete: () => {},
            });
          }
        });
      } else {
        this.router.navigate(['auth/login']);
      }
    });
  }
}
