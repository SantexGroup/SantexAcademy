import { Component } from '@angular/core';

@Component({
  selector: 'app-volunteer-filters',
  templateUrl: './volunteer-filters.component.html',
  styleUrls: ['./volunteer-filters.component.css'],
})
export class VolunteerFiltersComponent {
  optionSelected: string = '';

  onChangeModeWord(option: string) {
    this.optionSelected = option;
    console.log(this.optionSelected);
  }
}
