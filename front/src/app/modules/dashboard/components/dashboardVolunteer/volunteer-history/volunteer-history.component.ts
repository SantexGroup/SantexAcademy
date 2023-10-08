import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../../../services/volunteer.service';
import { Store } from '@ngrx/store';
import { selectToken } from 'src/app/core/auth.selectors';

@Component({
  selector: 'app-volunteer-history',
  templateUrl: './volunteer-history.component.html',
  styleUrls: ['./volunteer-history.component.css'],
})
export class VolunteerHistoryComponent implements OnInit {
  meVolunteerings: any;
  constructor(private store: Store, private volServices: VolunteerService) {}

  ngOnInit(): void {
    this.getAllVolunteering();
  }

  getAllVolunteering() {
    this.store.select(selectToken).subscribe((token) => {
      if (token) {
        this.volServices.getMePostulations(token).subscribe({
          next: (res) => {
            this.meVolunteerings = res;
            console.log(res);
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
  }

  updateStatusPostulation(status: string, idPostulation: string) {
    const data = { status: status };
    this.volServices.updateStatusPostulation(data, idPostulation).subscribe({
      next: (res) => {
        console.log(res);
        window.location.reload();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deletePostulation(idPostulation: string) {
    this.volServices.deletePostulation(idPostulation).subscribe({
      next: (res) => {
        console.log(res);
        window.location.reload();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
