import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from 'src/app/core/services/categorias.service';

import { VerArtGenService } from 'src/app/core/services/ver-art-gen.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  // obtener id de la categoria
  idCategory: string = '';

  // nombre de la categoria
  nameCategory: string = '';

  // obtener la lista de articulos
  listArticulos: any = [];

  // obtener imgs
  servidor: string = environment.API_URL + '/images/'
  images: string[] = [];
  

  constructor(private activatedroute: ActivatedRoute, private router: Router, private service: CategoriasService, private artservice: VerArtGenService) { }

  ngOnInit(): void {
    this.getByCategory();
  }

  getByCategory() {
    this.activatedroute.params.subscribe(params => {
      this.idCategory = params['id'];
      this.service.getByCategory(this.idCategory).subscribe(response => {
        console.log(response);
        this.nameCategory = response.name;
        const productos = response.Products;
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
    })
  }
  verMas(id: string) {
    localStorage.setItem( 'idProd', JSON.stringify(id));
    this.router.navigateByUrl('/vista-articulo');
  }
}
  