import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VolunteeringService } from 'src/app/services/volunteering.service';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css'],
})
export class VolunteersComponent implements OnInit {
  dataInput: string = '';
  volunteering: Array<[]> = [];
  volunteeringFilter: Array<[]> = [];
  constructor(
    private volunteeringServices: VolunteeringService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.volunteeringServices.getVolunteers().subscribe({
      next: (res) => {
        this.volunteering = res.volunteerings;
        console.log(this.volunteering);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  viewDataInput(e: any) {
    console.log(e.target.value);
  }
}
