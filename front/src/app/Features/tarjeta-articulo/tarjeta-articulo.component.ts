import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerArtGenService } from 'src/app/core/services/ver-art-gen.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-tarjeta-articulo',
  templateUrl: './tarjeta-articulo.component.html',
  styleUrls: ['./tarjeta-articulo.component.css']
})
export class TarjetaArticuloComponent implements OnInit {

  listArticulos: any = [];

  // obtener imgs
  servidor: string = environment.API_URL + '/images/'
  images: string[] = [];
  
  constructor(private service: VerArtGenService, private router: Router) { }

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

  verMas(id: string) {
    localStorage.setItem( 'idProd', JSON.stringify(id));
    this.router.navigateByUrl('/vista-articulo');
  }
}