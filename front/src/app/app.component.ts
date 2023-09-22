import { Component, OnInit } from '@angular/core';
import { NavBarService } from './core/services/toolServices/nav-bar.service';
import { UserDataService } from './core/services/toolServices/userData.service';
import { Router } from '@angular/router';
import { UserService } from './core/services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    public views: NavBarService,
    private userData: UserDataService,
    private router: Router,
    private user: UserService
    ){  }

  ngOnInit(): void {
    if(this.userData.isAuthenticated()){
      this.views.hideLanding();
      this.views.accountButton = false;
      this.views.quickButton = true;
      this.views.title = ("Bienvenido! " + this.userData.userName + " " + this.userData.lastName);
      this.router.navigate([`/home/${this.userData.userId}/cv`])
    }else{
      this.router.navigate(['/']);
    }
    this.views.restart();
  }

  uploadImage(event: any): any {
    const fileToUpload = event.target.files[0];
    console.log(event.target.files[0])
    if(fileToUpload){
      const formData = new FormData();
      formData.append('pictureLink', fileToUpload);

      this.user.uploadPicture(formData).subscribe((data)=>{
        this.userData.urlPicture = "https://drive.google.com/uc?export=view&id=" + data;
        console.log(this.userData.urlPicture);
      });

      
    }

    
  }

}
