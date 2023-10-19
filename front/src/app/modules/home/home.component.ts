import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ApiService } from 'src/app/core/http/api.service';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';
import { UserService } from 'src/app/core/services/usuario.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private router: Router, 
    public views: NavBarService, 
    public userData: UserDataService,
    private api: ApiService
  ) { }

  ngOnInit(): void {

    this.imageDownload();
    
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
  profiles(){
    this.router.navigate(['/profiles'])
  }

  imageDownload() {
    return this.userData.downloadImage(this.userData.urlPicture, this.userData.userId).subscribe(() => {
      this.userData.imageProfile = `${this.api.apiUrl}user/profile/profile${this.userData.userId}.jpeg`;
    });
  }
  
}
