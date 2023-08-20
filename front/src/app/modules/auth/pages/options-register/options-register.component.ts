import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options-register',
  templateUrl: './options-register.component.html',
  styleUrls: ['./options-register.component.css'],
})
export class OptionsRegisterComponent {
  constructor(private router: Router) {}

  navigateToOptionsRegister() {
    this.router.navigate(['/volunteer-register']);
  }
}
