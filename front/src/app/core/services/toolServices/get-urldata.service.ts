import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GetURLdataService {

  id:number = 0;
  title: string = "";
  route:string = "";
  
  
  constructor( ) { }

  getId(){
    const urlId = ((window.location.pathname).split('/'))[2];
    this.id = parseInt(urlId);
    console.log(this.id)
  }

  getRoute(){
    const newRoute = window.location.pathname;
    this.route = newRoute
   }

}
