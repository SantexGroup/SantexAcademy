import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FormRevisionService } from 'src/app/core/services/toolServices/form-revision.service';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(
    private router: Router, 
    private formService: FormRevisionService,
    public views: NavBarService, 
    public userData: UserDataService,
  ) { }

  ngOnInit(): void {
    this.views.title = "Home";
  } 

  checkForm(){
    this.formService.formStatus.subscribe((data)=>{
      console.log(data)
      if(data){
        window.confirm('¡Atención! Los datos no guardados se perderán. ¿Confirma?')
      }
    });
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
  
}
