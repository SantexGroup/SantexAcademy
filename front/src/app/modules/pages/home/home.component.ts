import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mostrarDiv: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  cambiar(estado:any):void{
    console.log("DEL HOME", estado);
    this.mostrarDiv = estado;
  }

}
