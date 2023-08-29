import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
  showRegisterForm: boolean = false;
  showRegisterAnswer: boolean = false;

  toggleRegisterForm(): void {
    this.showRegisterForm = !this.showRegisterForm;
  }

  toggleRegisterAnswer(): void {
    this.showRegisterAnswer = !this.showRegisterAnswer;
  }
}