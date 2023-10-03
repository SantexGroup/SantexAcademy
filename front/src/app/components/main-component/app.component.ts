import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Incubadora-NOC';

  constructor(){

  }

  
ngOnInit(): void {
    // this.http.get('http://localhost:4001/users/getAll').subscribe();
  }
}
