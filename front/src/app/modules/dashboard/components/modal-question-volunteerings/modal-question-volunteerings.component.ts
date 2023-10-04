import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-modal-question-volunteerings',
  templateUrl: './modal-question-volunteerings.component.html',
  styleUrls: ['./modal-question-volunteerings.component.css'],
})
export class ModalQuestionVolunteeringsComponent {
  constructor(private store: Store) {}
  @Output() onDeleteVolunteering = new EventEmitter();
  @Output() cancelDeletion = new EventEmitter();
  @Input() nameVolunteeringDelete: string = '';

  handdleDeleteVolunteering() {
    this.onDeleteVolunteering.emit();
  }

  handdleCancelDeleteVolunteering() {
    this.cancelDeletion.emit();
  }
}
