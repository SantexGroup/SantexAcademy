import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register-login-exchange-modal',
  templateUrl: './register-login-exchange-modal.component.html',
  styleUrls: ['./register-login-exchange-modal.component.css']
})
export class RegisterLoginExchangeModalComponent implements OnInit {
  @Output() closeModalEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  closeModal(): void {
    this.closeModalEvent.emit();
  }
}
