import { Component, OnInit } from '@angular/core';
import { VolunteeringService } from 'src/app/services/volunteering.service';
import { volunteering } from '../../models/volunteering.model';
import { organization } from 'src/app/models/organization.model';
export interface FilterEvent {
  key: keyof volunteering;
  value: string;
}

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css'],
})
export class VolunteersComponent implements OnInit {
  dataInput: string = '';
  volunteering: volunteering[] = [];
  volunteeringFilter: volunteering[] = [];
  constructor(private volunteeringServices: VolunteeringService) {}

  ngOnInit(): void {
    this.volunteeringServices.getVolunteers().subscribe({
      next: (res) => {
        this.volunteering = res.volunteerings;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  viewDataInput(e: any) {
    console.log(e.target.value);
  }

  getAllVolunteers() {
    this.volunteeringFilter = this.volunteering;
  }

  filteredVolunteers(event: string[]) {
    if (event.length < 2) {
      this.volunteeringFilter = this.volunteering;
      return;
    }

    const key = event[0];
    const normalizedValues = event
      .slice(1)
      ?.map((value) => value.toLowerCase());

    this.volunteeringFilter = this.volunteering.filter((e) => {
      const valueToCheck = e[key as keyof volunteering]?.toLowerCase();
      return normalizedValues.includes(valueToCheck);
    });
  }

  filteredVolunteersByOrganization(selectedOrganizations: string[]) {
    if (selectedOrganizations.length === 0) {
      this.volunteeringFilter = this.volunteering;
      return;
    }
    this.volunteeringFilter = this.volunteering.filter((e) => {
      const organizationsToCheck = selectedOrganizations.slice(1);
      return organizationsToCheck.includes(
        (e.organization as organization)?.name
      );
    });
  }

  filteredVolunteersByCategory(selectedOrganizations: string[]) {
    if (selectedOrganizations.length === 0) {
      this.volunteeringFilter = this.volunteering;
      return;
    }

    this.volunteeringFilter = this.volunteering.filter((e) => {
      const categoriesToCheck = selectedOrganizations
        .slice(1)
        .map((value) => value.toLowerCase());
      return categoriesToCheck.includes(
        (e.organization as organization)?.category?.toLowerCase()
      );
    });
  }

  filteredVolunteersByDate(event: string[]) {
    console.log(event);

    if (event.length < 2) {
      this.volunteeringFilter = this.volunteering;
      return;
    }

    const key = event[0];
    const normalizedValues = event.slice(1).map((value) => value.toLowerCase());
    const currentDate = new Date();
    const last24Hours = new Date(currentDate);
    last24Hours.setDate(currentDate.getDate() - 1);

    // Calcular la fecha límite para "semana pasada"
    const lastWeek = new Date(currentDate);
    lastWeek.setDate(currentDate.getDate() - 7);

    // Calcular la fecha límite para "mes pasado"
    const lastMonth = new Date(currentDate);
    lastMonth.setMonth(currentDate.getMonth() - 1);

    this.volunteeringFilter = this.volunteering.filter((e) => {
      if (key === 'createdAt') {
        const createdAtDate = new Date(e[key]);
        console.log('createdAt', createdAtDate);

        if (normalizedValues.includes('ultimas 24 horas')) {
          return createdAtDate >= last24Hours && createdAtDate <= currentDate;
        } else if (normalizedValues.includes('semana pasada')) {
          return createdAtDate >= lastWeek && createdAtDate <= last24Hours;
        } else if (normalizedValues.includes('mes pasado')) {
          return createdAtDate >= lastMonth && createdAtDate <= lastWeek;
        } else {
          return false;
        }
      } else {
        const valueToCheck = e[key as keyof volunteering]?.toLowerCase();
        return normalizedValues.includes(valueToCheck);
      }
    });
    console.log(this.volunteeringFilter);
  }
}
