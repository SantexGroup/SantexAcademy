import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-status-form',
  templateUrl: './modal-status-form.component.html',
  styleUrls: ['./modal-status-form.component.css'],
})
export class ModalStatusFormComponent {
  @Input() status: string = '';
  @Input() routeContinue: string = '';
  @Input() textBtn: string = '';
  @Input() message: string = '';
  @Input() errors: any = [];

  @Output() changueValueModal = new EventEmitter();

  constructor(private router: Router) {}

  handlleContinue() {
    this.changueValueModal.emit();
    this.router.navigate([`/${this.routeContinue}`]);
  }
}
