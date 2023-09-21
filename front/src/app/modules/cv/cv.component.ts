import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})

export class CVComponent implements OnInit {

  

  constructor( 
    public views: NavBarService
   ) { }

  ngOnInit(): void {
  }  

}




