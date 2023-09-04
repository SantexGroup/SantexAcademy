import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavBarService{

  constructor(public router: Router) { }

  navBarShow: boolean = true;

  landing: boolean = true;

  externalComponent: boolean = false;
  
  hideLanding(){
    this.landing = false;
    this.externalComponent = true;
  }

  notShow(){
    this.landing = true;
    this.externalComponent = false;
  }

}
