import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-status',
  templateUrl: './modal-status.component.html',
  styleUrls: ['./modal-status.component.css'],
})
export class ModalStatusComponent {
  @Input() status: string = '';
  @Input() message: string = '';
  @Output() closeModalStatus = new EventEmitter();

  closeModal() {
    this.closeModalStatus.emit();
  }
}
