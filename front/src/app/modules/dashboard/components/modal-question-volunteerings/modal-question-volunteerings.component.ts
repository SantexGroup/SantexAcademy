import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { OrganizationService } from '../../services/organization.service';
import { selectToken } from 'src/app/core/auth.selectors';

@Component({
  selector: 'app-modal-question-volunteerings',
  templateUrl: './modal-question-volunteerings.component.html',
  styleUrls: ['./modal-question-volunteerings.component.css'],
})
export class ModalQuestionVolunteeringsComponent {
  constructor(private store: Store, private orgServices: OrganizationService) {}
  @Output() cancelDeletion = new EventEmitter();
  @Input() nameVolunteeringDelete: string = '';
  @Input() idVolunteeringDelete: string = '';

  handdleDeleteVolunteering() {
    this.store.select(selectToken).subscribe((token) => {
      if (token) {
        this.orgServices
          .deleteVolunteeringByIdOrg(token, this.idVolunteeringDelete)
          .subscribe({
            next: (res) => {
              window.location.reload();
            },
            error: (err) => {
              console.log(err);
            },
          });
      }
    });
  }

  handdleCancelDeleteVolunteering() {
    this.cancelDeletion.emit();
  }
}
