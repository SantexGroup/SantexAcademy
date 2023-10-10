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
  images: string[] = [];
  listArtId: string[] = [];
  bolArt: boolean = false;
  servidor: string = environment.API_URL + '/images/'
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
      this.bolArt = true;
    }
    //peticiones
    const observables = this.listArtId.map(id => this.service.traerProductos(+id));
    //crear lista indicando esperar las suscripciones de observables
    forkJoin(observables).subscribe(responses => {
      this.listArticulos = responses.map(res => ({ ...res }));
      for (let i = 0; i < this.listArticulos.length; i++){
        if(this.listArticulos[i].Images[0].url){
          const imageName = this.listArticulos[i].Images[0].url;
          this.images.push(this.servidor + imageName);
        }
      }
    });
  }
  redireccion(id: string) {
    localStorage.setItem('idProd', id)
    this.router.navigateByUrl('/vista-articulo')
  }
}