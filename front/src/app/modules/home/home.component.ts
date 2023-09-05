import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { GetURLdataService } from 'src/app/core/services/toolServices/get-urldata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router, 
    public dataUrl: GetURLdataService,
    public views: NavBarService
    ) {
  }

  ngOnInit(): void {
    this.dataUrl.getRoute()
  }

  optionales(){
    this.router.navigate(['/optionales'])
  }
  formacion(){
    this.router.navigate(['/formaciones'])
  }
  experiencias(){
    this.router.navigate(['/experiencias'])
  }
  lenguajes(){
    this.router.navigate(['/lenguajes'])
  }
}
