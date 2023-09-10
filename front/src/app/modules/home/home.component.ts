import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { Profile } from 'src/app/core/interfaces/profile.interface';
import { id } from 'date-fns/locale';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listProfile: Profile[] = []
 

  constructor(
    private router: Router, 
    public views: NavBarService,    
    private _profileServices: ProfileService, 
    ) { }
  ngOnInit(): void {
    this.getListProfile();
  }  

  optionales(){
    this.router.navigate(['/optionales'])
  }
  formacion(){
    this.router.navigate(['/formaciones'])
  }
  experiencias(){
    this.router.navigate(['/experiencias'])
  }
  lenguajes(){
    this.router.navigate(['/lenguajes'])
  }


  getListProfile(){
    const profileId = 1
    this._profileServices.getProfile(profileId).subscribe((data) => {
      this.listProfile = data;
      console.log(this.listProfile)
    } )
  }
}
