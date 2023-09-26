import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-volunteering-search',
  templateUrl: './volunteering-search.component.html',
  styleUrls: ['./volunteering-search.component.css']
})
export class VolunteeringSearchComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() backgroundColor!: string;
  constructor() { }
}



