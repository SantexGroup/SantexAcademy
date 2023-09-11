import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { ProfileService } from 'src/app/core/services/profile.service';
import { Profile } from 'src/app/core/interfaces/profile.interface';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})

export class CVComponent implements OnInit {
  listProfile: Profile[] = [];
  profileData: any; // Variable para almacenar los datos proporcionados

  constructor(
    private router: Router, 
    public views: NavBarService,    
    private _profileServices: ProfileService
  ) { }

  ngOnInit(): void {
    this.getListProfile();
  }  

  
  getListProfile(){
    const profileId = 14;
    this._profileServices.getProfile(profileId).subscribe((data) => {
      this.profileData = data; // Almacena los datos proporcionados en profileData
      console.log(this.profileData);
      //acceder a los datos personales
      const nombreUsuario = this.profileData.User.name;
      const lastName = this.profileData.User.lastName;
      const phone = this.profileData.User.phone;
      const email = this.profileData.User.email;
    //acceder a las formaciones  
      this.listProfile = this.profileData.Formations;
     //acceder a las experiencias 
      this.listProfile= this.profileData.Experiences.position;
      this.listProfile= this.profileData.Experiences.company;
      this.listProfile= this.profileData.Experiences.description;
    //acceder a los lenguajes
      this.listProfile= this.profileData.Languages.language;
      this.listProfile= this.profileData.Languages.ProfileLanguage.level

      //accedes a datos opcionales
      this.listProfile = this.profileData.Optionals.Marital.condition;
      
     

     
      
      
      console.log(nombreUsuario);
    });
  }
}




