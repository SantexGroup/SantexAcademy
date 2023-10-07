import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})

export class CVComponent implements OnInit {

  constructor( 
    public views: NavBarService,
    private userData: UserDataService
   ) { }

  ngOnInit(): void {
    this.userData.getProfiles();
  }  
}




