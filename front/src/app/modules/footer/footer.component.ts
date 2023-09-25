import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  fecha :Date = new Date();
  year:number=0;

  constructor() { this.year = this.fecha.getFullYear();}

  ngOnInit(): void {
  }

}
