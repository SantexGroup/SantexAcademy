import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent {
  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logOut();
  }
}
