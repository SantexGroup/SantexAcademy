import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-login-exchange-modal',
  templateUrl: './register-login-exchange-modal.component.html',
  styleUrls: ['./register-login-exchange-modal.component.css']
})
export class RegisterLoginExchangeModalComponent implements OnInit {
  @Output() closeModalEvent = new EventEmitter();

  constructor(private router: Router) { }
  ngOnInit(): void { }

  closeModal(): void {
    this.closeModalEvent.emit();
  }

  navigateToRegister(): void {
    this.router.navigate(['/auth/options-register']); // Replace with the actual route path
  }

}
