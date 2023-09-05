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

  quickButton: boolean = false;

  accountButton: boolean = true;
  /* Titulo de la navBar */
  title: string = "";

  
  hideLanding(){
    this.landing = false;
    this.externalComponent = true;
  }

  notShow(){
    this.landing = true;
    this.externalComponent = false;
  }

  buttonQuick(){
    this.landing = true;
    this.externalComponent = false;
    this.accountButton = true;
    this.quickButton = false;
  }

  buttonAccount(){
    this.quickButton = false;
  }

}
