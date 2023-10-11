import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerArtGenService } from 'src/app/core/services/ver-art-gen.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  url1: string = 'http://localhost:4001/images/banner-03f.jpg';
  url2: string = 'http://localhost:4001/images/banner-02f.jpg';
  url3: string = 'http://localhost:4001/images/banner-01f.jpg';

  listArticulos: any = [];

  // obtener imgs
  servidor: string = environment.API_URL + '/images/'
  images: string[] = [];
  
  constructor(private router: Router, private service: VerArtGenService) { }
  
  ngOnInit(): void {
    this.service.getProduct().subscribe(productos => {
      console.log(productos);
      if (productos){
        for (let i = 0; i < productos.length; i++){
          if(productos[i].Images[0].url){
            const imageName = productos[i].Images[0].url;

            this.images.push(this.servidor + imageName);
            this.listArticulos.push(productos[i]);
          }
        }
      }
    })
  }
  
  redireccion(id: string) {
    localStorage.setItem( 'idProd', JSON.stringify(id));
    this.router.navigateByUrl('/vista-articulo');
  }

  redCategory(){
    this.router.navigateByUrl('/tarjeta');
  }

  verMas(id: string) {
    localStorage.setItem( 'idProd', JSON.stringify(id));
    this.router.navigateByUrl('/vista-articulo');
  }
}
