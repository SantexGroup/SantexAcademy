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

  plusOne = true;

  selectorHide: boolean = true;

  saveButton = false;
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

  profileSelct(){
    this.selectorHide = false;
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

  changeViews() {
    this.plusOne = false;
    this.saveButton = true;
  }

  restart(){
    window.addEventListener('popstate', (e)=> {
      this.navBarShow=false;
      this.landing=true;
      this.externalComponent=false;
      this.plusOne = true;
      this.saveButton = false;
      this.selectorHide = true;
    });
  }
}
