import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.css']
})
export class HeaderDashboardComponent implements OnInit {
  isLogoutModalOpen: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openLogoutModal(){
    this.isLogoutModalOpen = true
  }

  closeLogoutModal(event: boolean){
    if(!event){
      this.isLogoutModalOpen = false;
    }    
  }

  logout(event: boolean){
    //borrar el token del localstorage
    localStorage.removeItem('jwt');

    //reset variable mostrar modal
    this.isLogoutModalOpen = false;

    //redireccionar a la vista de send-otp
    if(event){
      this.router.navigate(['/']);
    }
  }

}
