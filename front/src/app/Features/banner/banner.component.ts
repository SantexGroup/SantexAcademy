import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  url1: string = 'http://localhost:4001/images/banner-03f.jpg';
  url2: string = 'http://localhost:4001/images/banner-02f.jpg';
  url3: string = 'http://localhost:4001/images/banner-01f.jpg';
  
  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }
  
  redireccion(id: string) {
    localStorage.setItem( 'idProd', JSON.stringify(id));
    this.router.navigateByUrl('/vista-articulo');
  }

  redCategory(){
    this.router.navigateByUrl('/tarjeta');
  }

}
