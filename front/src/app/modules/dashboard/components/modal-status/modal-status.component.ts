import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-modal-status',
  templateUrl: './modal-status.component.html',
  styleUrls: ['./modal-status.component.css'],
})
export class ModalStatusComponent {
  @Input() status: string = '';
  @Input() textBtn: string = '';
  @Input() message: string = '';
  @Output() changueValueModal = new EventEmitter();

  constructor() {}

  handlleContinue() {
    this.changueValueModal.emit();
  }
}
