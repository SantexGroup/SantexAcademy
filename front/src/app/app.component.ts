import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Incubadora-NOC';

  constructor(private http: HttpClient){

  }

  
ngOnInit(): void {
    this.http.post('http://localhost:4001/users/createUser', {  }).subscribe();
  }
}
