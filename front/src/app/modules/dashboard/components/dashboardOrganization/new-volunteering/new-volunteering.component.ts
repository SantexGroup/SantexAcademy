import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { DashboardServicesService } from '../../../services/dashboard-services.service';
import { selectToken } from 'src/app/core/auth.selectors';

@Component({
  selector: 'app-new-volunteering',
  templateUrl: './new-volunteering.component.html',
  styleUrls: ['./new-volunteering.component.css'],
})
export class NewVolunteeringComponent implements OnInit {
  @Input() volunteerDataEdit: any;
  @Output() declineNewVolunteering = new EventEmitter();
  newVolunteering: FormGroup;
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private dashServices: DashboardServicesService
  ) {
    this.newVolunteering = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      modeOfwork: ['', Validators.required],
      workTime: ['', Validators.required],
      vacancies: [, [Validators.required]],
      address: ['', Validators.required],
      reward: [, Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.volunteerDataEdit) {
      this.newVolunteering.setValue({
        name: this.volunteerDataEdit.name,
        description: this.volunteerDataEdit.description,
        modeOfwork: this.volunteerDataEdit.modeOfwork,
        workTime: this.volunteerDataEdit.workTime,
        vacancies: this.volunteerDataEdit.vacancies,
        address: this.volunteerDataEdit.address,
        reward: this.volunteerDataEdit.reward,
      });
    }
  }

  onTimeWorkChange(keyForm: string, event: Event) {
    const selectedValue = (event.target as HTMLSelectElement).value;
    const updateObject = { [keyForm]: selectedValue };
    this.newVolunteering.patchValue(updateObject);
  }

  closeNewVolunteering() {
    this.newVolunteering.reset();
    this.declineNewVolunteering.emit();
  }

  addNewVolunteering() {
    if (this.newVolunteering.valid) {
      let formData = this.newVolunteering.value;
      this.store.select(selectToken).subscribe((token) => {
        if (token) {
          if (this.volunteerDataEdit) {
            this.dashServices
              .updateVolunteeringByIdOrg(
                token,
                formData,
                this.volunteerDataEdit.idVolunteering
              )
              .subscribe({
                next: (res) => {
                  window.location.reload();
                },
                error: (err) => {
                  console.log(err);
                },
              });
          } else {
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
        }
      });
    }
  }
}
