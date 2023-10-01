import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { resetToken, resetUserType } from 'src/app/core/auth.actions';

@Component({
  selector: 'app-modal-question',
  templateUrl: './modal-question.component.html',
  styleUrls: ['./modal-question.component.css'],
})
export class ModalQuestionComponent {
  constructor(private store: Store) {}
  @Output() onDeleteProfile = new EventEmitter();
  @Output() cancelDeletion = new EventEmitter();

  handdleDeleteUser() {
    this.onDeleteProfile.emit();
    localStorage.removeItem('auth');
    this.store.dispatch(resetToken());
    this.store.dispatch(resetUserType());
    window.location.href = window.location.href;
  }

  handdleCancelDeleteUser() {
    this.cancelDeletion.emit();
  }
}
