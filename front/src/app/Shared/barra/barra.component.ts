import { Component, OnInit } from '@angular/core';
import { BarraService } from 'src/app/core/services/barra.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  sidebarExpanded = false;
  listCategorias: any[]=[];
  listArticulos: any[]=[];
  listArticulosId: string[]=[];
  listArticulosFilt: any[]=[];
  textoTip: string = '';

  constructor(private service: BarraService, private router: Router) { }

  ngOnInit(): void {
    this.service.getCategories().subscribe(categorias => {this.listCategorias = categorias});
    this.service.getProducts().subscribe(articulos => {this.listArticulos = articulos});
  }

  filtrar(idCategoria: string) {
    this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
      this.router.navigate(['/categorias', idCategoria]).then(()=>{});
    })
  }
  filtrarProductos(texto: string) {
    localStorage.removeItem('idProdsBus')
    this.listArticulosFilt = this.listArticulos.filter(filt => filt.nombre.toLowerCase().indexOf(texto) > -1);
    this.textoTip = texto;
  }
  buscar() {
    if(this.textoTip == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No se encontró el articulo!',
        confirmButtonText: "Ok"
      })
    }else {
      for(let i=0; i < this.listArticulosFilt.length; i++) {
        localStorage.removeItem('idProdsBus');
        localStorage.removeItem('texBus');
        this.listArticulosId.push(JSON.stringify(this.listArticulosFilt[i].id));
        localStorage.setItem('idProdsBus', JSON.stringify(this.listArticulosId)); 
        localStorage.setItem('texBus', this.textoTip);
      };
      this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
        this.router.navigate(['/vista-por-texto']).then(()=>{})
      });
    }
  }
}