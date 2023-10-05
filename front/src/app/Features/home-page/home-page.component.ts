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
  
  sidebarExpanded = true;

  images: string[] = [];
  listArticulos: any = [];
  servidor: string = environment.API_URL + '/images/'

  constructor(private service: VerArtGenService, private router: Router) { }

  ngOnInit(): void {
     this.traerDatos();
  }

  traerDatos() {
    this.service.getProduct().subscribe(productos => {
      console.log(productos);
      if (productos){
        for (let i = 0; i < productos.length; i++){
          if(productos[i].Images[0].url){
            const imageName = productos[i].Images[0].url;
            this.images.push(this.servidor + imageName);          
            this.listArticulos.push(productos[i]);
          }
          this.listArticulos = this.listArticulos.slice(0, 9);
          this.images = this.images.slice(0, 9)
          console.log("Articulos: " + JSON.stringify(this.listArticulos[i].Images[0].url));
        }
      }
    })  
  }

  verMas(id: string) {
    localStorage.setItem( 'idProd', JSON.stringify(id));
    this.router.navigateByUrl('/vista-articulo');
  }

}
