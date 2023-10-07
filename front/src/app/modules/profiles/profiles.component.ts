import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/core/services/profile.service';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  constructor(
    private views: NavBarService,
    private _profileServ: ProfileService,
    public userData: UserDataService 
  ) { }

  ngOnInit(): void {
    this.views.changeTitle('Perfiles')
    this.userData.getProfiles()
  }

  deleteProfiles(id?:number){
    return this._profileServ.deleteProfile(id).subscribe(()=>{
      this.userData.getProfiles();
    });
  }

}
