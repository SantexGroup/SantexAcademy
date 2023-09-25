import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  fecha :Date = new Date();
  year:number=0;

  constructor() { this.year = this.fecha.getFullYear();}

  ngOnInit(): void {
  }

}
