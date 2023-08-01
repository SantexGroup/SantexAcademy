import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  isOpen: boolean = false;

  handleMenu(){
    if(this.isOpen == false){
      this.isOpen = true
    }else {
      this.isOpen = false
    }
  }  

}
