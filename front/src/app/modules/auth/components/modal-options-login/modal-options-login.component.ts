import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal-options-login',
  templateUrl: './modal-options-login.component.html',
  styleUrls: ['./modal-options-login.component.css'],
})
export class ModalOptionsLoginComponent {
  @Output() optionSelected = new EventEmitter();

  handleSelect(select: string) {
    this.optionSelected.emit(select);
  }
}
