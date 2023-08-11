import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {

  mostrarMenu:boolean;

  constructor(private router:Router) {
    this.mostrarMenu = false;
   }

  ngOnInit(): void {
  }
  
  irLoginVoluntarios(){
    this.router.navigate(['/index/login'],{queryParams:{tipo:'voluntario'}});
  }

  irLoginOrganizaciones(){
    this.router.navigate(['/index/login'],{queryParams:{tipo:'organizacion'}});
  }

}