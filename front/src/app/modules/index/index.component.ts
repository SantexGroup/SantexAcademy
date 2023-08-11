import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  
  @ViewChild('sideNav') sideNav!:MatSidenav;
  constructor(private router:Router) {
   }

  ngOnInit(): void {
  }
  irLoginVoluntarios(){
    this.router.navigate(['/index/login'],{queryParams:{tipo:'voluntario'}});
    this.sideNav.close();
  }

  irLoginOrganizaciones(){
    this.router.navigate(['/index/login'],{queryParams:{tipo:'organizacion'}});
    this.sideNav.close();
  }

 redireccionarA(ruta:string):void{
    this.router.navigate([ruta]);
    this.sideNav.close();
  }

}
