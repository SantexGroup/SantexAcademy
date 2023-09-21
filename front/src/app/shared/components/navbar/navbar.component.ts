import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isOpen: boolean = false;
  openOptionOne: boolean = false;
  openOptionTwo: boolean = false;
  maxHeight: number = 500;
  isToken: boolean = false;

  constructor(private authService: AuthService) {
    const isOpenValue = localStorage.getItem('isOpen');
    if (isOpenValue !== null) {
      this.isOpen = JSON.parse(isOpenValue);
    }
  }

  handleMenu() {
    this.isOpen = !this.isOpen;
    localStorage.setItem('isOpen', JSON.stringify(this.isOpen));
  }

  openOpOne() {
    if (!this.openOptionOne) {
      this.openOptionOne = true;
    } else {
      this.openOptionOne = false;
    }
  }
  openOpTwo() {
    if (!this.openOptionTwo) {
      this.openOptionTwo = true;
    } else {
      this.openOptionTwo = false;
    }
  }

  ngOnInit() {
    const token = this.authService.getAuthToken();
    console.log(token);
    if (token) {
      this.isToken = true;
    }
  }
}
