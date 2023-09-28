import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { Profile } from 'src/app/core/interfaces/profile.interface';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';


@Component({
  selector: 'app-profiles-four',
  templateUrl: './profiles-four.component.html',
  styleUrls: ['./profiles-four.component.css']
})
export class ProfilesFourComponent implements OnInit {

  listProfile: Profile[] = [];
  profileData: any; // Variable para almacenar los datos proporcionados

  constructor(
    public userData: UserDataService,
    public views: NavBarService,    
  ) { }

  ngOnInit(): void {
  }  

}
