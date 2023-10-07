import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisTextSerService } from 'src/app/core/services/vis-text-ser.service';
import { environment } from 'src/environments/environment';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-vista-por-texto',
  templateUrl: './vista-por-texto.component.html',
  styleUrls: ['./vista-por-texto.component.css']
})
export class VistaPorTextoComponent implements OnInit {

  listArticulos: any = [];

  // obtener imgs
  servidor: string = environment.API_URL + '/images/'
  images: string[] = [];
  listArtId: string[] = [];
  resBus: string = JSON.stringify(localStorage.getItem('texBus'))
  
  constructor(private service: VisTextSerService, private router: Router) { }

  ngOnInit(): void {
    this.traerDatos();
  }
  
  traerDatos() {
    let idProdsBus = localStorage.getItem('idProdsBus');
    if (idProdsBus) {
      let newObject = JSON.parse(idProdsBus);
      this.listArtId = newObject;
    } else {
      alert('No hay productos con lo buscado')
    }
    //peticiones
    const observables = this.listArtId.map(id => this.service.traerProductos(+id));
    //crear lista indicando esperar las suscripciones de observables
    forkJoin(observables).subscribe(responses => {
      this.listArticulos = responses.map(res => ({ ...res }));
      // console.log("articulos" + JSON.stringify(this.listArticulos));
      // console.log(this.listArticulos[0].Images[0].url)
      for (let i = 0; i < this.listArticulos.length; i++){
        if(this.listArticulos[i].Images[0].url){
          const imageName = this.listArticulos[i].Images[0].url;
          this.images.push(this.servidor + imageName);
        }
      }
    });
    console.log("imagenes " + this.images);
  }
  redireccion(id: string) {
    localStorage.setItem('idProd', id)
    this.router.navigateByUrl('/vista-articulo')
  }
}