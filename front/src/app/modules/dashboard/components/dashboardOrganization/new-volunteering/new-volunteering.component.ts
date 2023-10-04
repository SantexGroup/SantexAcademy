import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DashboardServicesService } from '../../../services/dashboard-services.service';
import { selectToken } from 'src/app/core/auth.selectors';

@Component({
  selector: 'app-new-volunteering',
  templateUrl: './new-volunteering.component.html',
  styleUrls: ['./new-volunteering.component.css'],
})
export class NewVolunteeringComponent {
  @Output() declineNewVolunteering = new EventEmitter();
  newVolunteering: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private dashServices: DashboardServicesService
  ) {
    this.newVolunteering = this.fb.group({
      name: [''],
      description: [''],
      modeOfwork: [''],
      workTime: [''],
      vacancies: [0],
      address: [''],
      reward: [0],
    });
  }

  onTimeWorkChange(keyForm: string, event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    const updateObject = { [keyForm]: selectedValue };
    this.newVolunteering.patchValue(updateObject);
  }

  closeNewVolunteering() {
    this.declineNewVolunteering.emit();
  }

  addNewVolunteering() {
    if (this.newVolunteering.valid) {
      let formData = this.newVolunteering.value;
      this.store.select(selectToken).subscribe((token) => {
        if (token) {
          this.dashServices.addVolunteering(formData, token).subscribe({
            next: (res) => {
              console.log(res);
              this.newVolunteering.reset();
            },
            error: (err) => {
              console.log(err);
            },
          });
        }
      });
    }
  }
}
