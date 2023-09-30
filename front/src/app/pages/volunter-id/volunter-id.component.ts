import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VolunteeringService } from 'src/app/services/volunteering.service';

@Component({
  selector: 'app-volunter-id',
  templateUrl: './volunter-id.component.html',
  styleUrls: ['./volunter-id.component.css'],
})
export class VolunterIdComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private volunteeringServices: VolunteeringService,
    private datePipe: DatePipe
  ) {}

  volunteering: any = {};

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.volunteeringServices.getVolunteerById(params['id']).subscribe({
        next: (response) => {
          this.volunteering = response.volunteeringFound;
        },
        error: (error) => {
          console.error('Error in bringing the organization', error);
        },
        complete: () => {},
      });
    });
  }

  formatCreatedAtDate(dateString: string): string {
    const createdAtDate = new Date(dateString);

    if (isNaN(createdAtDate.getTime())) {
      return 'Fecha de creación inválida';
    }

    const now = new Date();
    const diffInMilliseconds = now.getTime() - createdAtDate.getTime();
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 3600 * 24));
    if (diffInDays === 0) {
      return 'Publicado hoy';
    } else if (diffInDays === 1) {
      return 'Publicado ayer';
    } else {
      return `Publicado el ${this.datePipe.transform(
        createdAtDate,
        'dd/MM/yyyy'
      )}`;
    }
  }
}
