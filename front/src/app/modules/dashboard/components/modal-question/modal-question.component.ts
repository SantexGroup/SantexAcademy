import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-question',
  templateUrl: './modal-question.component.html',
  styleUrls: ['./modal-question.component.css'],
})
export class ModalQuestionComponent {
  @Output() onDeleteProfile = new EventEmitter();
  @Output() cancelDeletion = new EventEmitter();

  handdleDeleteUser() {
    this.onDeleteProfile.emit();
  }

  handdleCancelDeleteUser() {
    this.cancelDeletion.emit();
  }
}
