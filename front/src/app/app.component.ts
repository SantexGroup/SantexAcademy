import { Component, OnInit } from '@angular/core';
import { NavBarService } from './core/services/toolServices/nav-bar.service';
import { UserDataService } from './core/services/toolServices/userData.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    public views: NavBarService,
    private userData: UserDataService
    ){  }

  ngOnInit(): void {
    this.views.restart();
    this.getToken();
    this.userData.isAuthenticated();
  }

  getToken(){
    this.userData.token = localStorage.getItem('accessToken');
    console.log(this.userData.token);
  }
}
