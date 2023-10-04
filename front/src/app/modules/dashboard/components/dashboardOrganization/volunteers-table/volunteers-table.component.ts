import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectToken } from 'src/app/core/auth.selectors';
import { DashboardServicesService } from '../../../services/dashboard-services.service';
import { volunteering } from '../../../models/volunteerings.model';

@Component({
  selector: 'app-volunteers-table',
  templateUrl: './volunteers-table.component.html',
  styleUrls: ['./volunteers-table.component.css'],
})
export class VolunteersTableComponent implements OnInit {
  @Input() idOrg: string = '';
  volunteerings: volunteering[] = [];
  nameVolunteeringDelete: string = '';
  onModalQuestion: boolean = false;
  constructor(
    private store: Store,
    private dashServices: DashboardServicesService
  ) {}

  ngOnInit(): void {
    this.getAllMeVolunteerings();
  }

  getAllMeVolunteerings() {
    this.store.select(selectToken).subscribe((token) => {
      if (token) {
        this.dashServices.volunteeringByIdOrg(token).subscribe({
          next: (res) => {
            this.volunteerings = res;
            console.log(res);
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
  }

  deleteVolunteering(idVol: string, nameVol: string) {
    this.nameVolunteeringDelete = nameVol;
    this.onModalQuestion = true;
    this.store.select(selectToken).subscribe((token) => {
      if (token) {
        this.dashServices.deleteVolunteeringByIdOrg(token, idVol).subscribe({
          next: (res) => {
            window.location.reload;
            console.log(res);
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
  }

  declineDeleteVolunteering() {
    this.onModalQuestion = !this.onModalQuestion;
  }
}
