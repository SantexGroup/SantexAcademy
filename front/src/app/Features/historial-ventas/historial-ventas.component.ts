import { Component, OnInit } from '@angular/core';
import { HisVenService } from 'src/app/core/services/his-ven.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-ventas',
  templateUrl: './historial-ventas.component.html',
  styleUrls: ['./historial-ventas.component.css']
})
export class HistorialVentasComponent implements OnInit {

  nomArt: string = '';
  nomVen: string = '';

  listcategorias: any[] = [];
  catArt: string = '';
  cat: any = [];

  desArt: string = '';

  envArt: string = '';
  pagArt: string = '';
  preArt: string = '';

  articulosVen: any = [];
  idVen: number = 0;
  datosLog: any = {};
  respuesta: any = [];

  constructor(private service: HisVenService, private router: Router) { }

  ngOnInit(): void {
    this.datosVendedor();
  }

  datosVendedor() {
    //leer local
    let datosLog = localStorage.getItem('resLog');
    if (datosLog) {
      let newObject = JSON.parse(datosLog);
      this.datosLog = newObject;
      this.idVen = this.datosLog[1].users.id;
    }
    //traer articulos, nomArt, desArt, preArt e idArt
    this.service.articulosVendedor(this.idVen).subscribe(res => {
      console.log("articulos: " + JSON.stringify(res));
      this.respuesta = res;
      this.nomArt = res[1].nombre;
      this.desArt = res[1].detalles;
      this.preArt = res[1].precio;
      if(res[1].envio) {
        this.envArt = 'envío y retiro';
      }else {
        this.envArt = 'Retiro'
      }
    })
    //nombre categoria producto
    this.service.getCategories().subscribe(categorias => {
      this.listcategorias = categorias
      console.log("cateogiras: " + JSON.stringify(this.listcategorias))
      for (let i=0; i < this.listcategorias.length; i++) {
        if (this.respuesta[1].idTipoProducto == this.listcategorias[i].id) {
          this.catArt = JSON.stringify(this.listcategorias[i].name.charAt(0).toUpperCase() + this.listcategorias[i].name.slice(1));
          this.catArt = this.catArt.slice(1, this.catArt.length-1);
        }
        if (this.catArt != this.listcategorias[i].name.charAt(0).toUpperCase() + this.listcategorias[i].name.slice(1)) {
          let newList = this.cat;
          newList.push(this.listcategorias[i]);
          this.cat = newList;
        }
      }
    });
    //nombre vendedor
    this.service.infoVendedor(this.idVen).subscribe(resVen => {
      this.nomVen = JSON.stringify(resVen.firstName.charAt(0).toUpperCase() + resVen.firstName.slice(1) + ' ' + (resVen.lastName.charAt(0).toUpperCase() + resVen.lastName.slice(1)));
      this.nomVen = this.nomVen.slice(1, this.nomVen.length-1);
    })
  }
  //redirecciones acciones
  redireccion1() {
    localStorage.setItem('idProd', JSON.stringify(this.idVen))
    this.router.navigate(['vista-articulo']);
  }
  redireccion2() {
    localStorage.setItem('idProd', JSON.stringify(this.idVen))
    this.router.navigate(['modificar-articulo']);    
  }
  redireccion3() {
    localStorage.setItem('idProd', JSON.stringify(this.idVen))
    // this.router.navigate(['modificar-articulo']);    
  }
}

  
