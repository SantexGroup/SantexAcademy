import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(
    public views: NavBarService,
    public userData: UserDataService,
  ) { }

  logout() {
    localStorage.clear();
  }

}
