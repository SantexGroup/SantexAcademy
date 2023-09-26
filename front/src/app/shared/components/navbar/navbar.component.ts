import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { UsersService } from 'src/app/services/users.service';

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
  isOpenprofileMenu: boolean = false;
  dataUser: any = {};

  constructor(
    private authService: AuthService,
    private usersServices: UsersService
  ) {
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
      this.openOptionTwo = false;
    } else {
      this.openOptionOne = false;
    }
  }
  openOpTwo() {
    if (!this.openOptionTwo) {
      this.openOptionTwo = true;
      this.openOptionOne = false;
    } else {
      this.openOptionTwo = false;
    }
  }

  ngOnInit() {
    const token = this.authService.getAuthToken();

    if (token != '') {
      this.usersServices.getProfileVolunteer(token).subscribe({
        next: (res) => {
          this.dataUser = res;
          this.isToken = true;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {},
      });
    }
  }

  logout() {
    this.authService.clearAuthToken();
    window.location.reload();
  }

  openProfileMenu() {
    if (this.isOpenprofileMenu == false) {
      this.isOpenprofileMenu = true;
    } else {
      this.isOpenprofileMenu = false;
    }
  }
}
