import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/core/services/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  constructor(
    public views: NavBarService,
    ) { }

  ngOnInit(): void {
  }
}
