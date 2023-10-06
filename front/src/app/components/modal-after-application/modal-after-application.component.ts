import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-after-application',
  templateUrl: './modal-after-application.component.html',
  styleUrls: ['./modal-after-application.component.css'],
})
export class ModalAfterApplicationComponent {
  @Input() status: string = '';
  @Input() message: string = '';
  @Input() textBtn: string = '';
  @Output() continueViewing = new EventEmitter();

  continueView() {
    this.continueViewing.emit();
  }
}
