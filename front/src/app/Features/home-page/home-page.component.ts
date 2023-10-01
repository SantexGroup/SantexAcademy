import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerArtGenService } from 'src/app/core/services/ver-art-gen.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  images: string[] = [];
  listArticulos: any = [];
  servidor: string = environment.API_URL + '/images/'

  constructor(private service: VerArtGenService, private router: Router) { }

  ngOnInit(): void {
    this.service.getProduct().subscribe(productos => {
      console.log(productos);
      if (productos){
        for (let i = 0; i < productos.length; i++){
          if(productos[i].Images[0].url){
            const imageName = productos[i].Images[0].url;
            this.images.push(this.servidor + imageName);
            console.log("imágenes: " + this.images[0]);
            this.listArticulos.push(productos[i]);
          }
        }
      }
    })   
  }
  

}
