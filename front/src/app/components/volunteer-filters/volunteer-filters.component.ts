import { Component } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-volunteer-filters',
  templateUrl: './volunteer-filters.component.html',
  styleUrls: ['./volunteer-filters.component.css'],
})
export class VolunteerFiltersComponent {
  panelOpenState = false;
  selectedDate: Date | null = null;
  dataInput: string = '';

  onDateSelected(event: MatDatepickerInputEvent<Date>) {
    this.selectedDate = event.value;
    console.log('Fecha seleccionada:', this.selectedDate);
  }

  viewDataInput(e: any) {
    console.log(e.target.value);
  }
}
