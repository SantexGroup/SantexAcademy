import { Component, OnInit } from '@angular/core';
import { NavBarService } from './core/services/toolServices/nav-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public active : boolean = false
  
  constructor(
    public views: NavBarService,
    ){  }

  ngOnInit(): void {
    this.views.restart();
  }
  
  activarNav() : void {
    this.active = !this.active
  }
}
