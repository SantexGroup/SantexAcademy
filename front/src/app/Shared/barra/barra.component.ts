import { Component, OnInit } from '@angular/core';
import { BarraService } from 'src/app/core/services/barra.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  sidebarExpanded = true;
  listCategorias: any[]=[];
  listArticulos: any[]=[];
  listArticulosId: string[]=[];
  listArticulosFilt: any[]=[];
  listObj: {} = {};
  texto: string = '';
  textoFiltrado: string = '';
  nombreArt: string = '';

  constructor(private service: BarraService, private router: Router) { }
  

  ngOnInit(): void {
    this.service.getCategories().subscribe(categorias => {this.listCategorias = categorias});
    this.service.getProducts().subscribe(articulos => {this.listArticulos = articulos
  });
  }
  filtrarProductos(texto: string) {
    this.listArticulosFilt = this.listArticulos.filter(filt => filt.nombre.toLowerCase().indexOf(texto) > -1);
  }
  buscar() {
    for(let i=0; i < this.listArticulosFilt.length; i++) {
      this.listArticulosId.push(JSON.stringify(this.listArticulosFilt[i].id));
      localStorage.setItem('idProdsBus', JSON.stringify(this.listArticulosId)); 
    }
    this.router.navigate(['tarjeta']);
  }
}
