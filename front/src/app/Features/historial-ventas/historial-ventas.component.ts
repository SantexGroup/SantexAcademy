import { Component, OnInit } from '@angular/core';
import { HisVenService } from 'src/app/core/services/his-ven.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-ventas',
  templateUrl: './historial-ventas.component.html',
  styleUrls: ['./historial-ventas.component.css']
})
export class HistorialVentasComponent implements OnInit {
  
  idVen: number = 0;
  modelo: any = {
    nomVen: '',
    nomArt: '',
    catArt: '',
    cat: [],
    idArt: 0,
  }
  listcategorias: any[] = [];

  desArt: string = '';
  envArt: string = '';
  pagArt: string = '';
  preArt: string = '';
  articulosVen: any = [];
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
      console.log("modelo: " + this.modelo.nomVen)
    }
    //nombre vendedor
    this.service.infoVendedor(this.idVen).subscribe(resVen => {
      this.modelo.nomVen = JSON.stringify(resVen.firstName.charAt(0).toUpperCase() + resVen.firstName.slice(1) + ' ' + (resVen.lastName.charAt(0).toUpperCase() + resVen.lastName.slice(1)));
      this.modelo.nomVen = this.modelo.nomVen.slice(1, this.modelo.nomVen.length-1);
    });
    //traer categorias
    this.service.getCategories().subscribe(categorias => {this.listcategorias = categorias, console.log("cateogrías: " + JSON.stringify(this.listcategorias))});
    //traer articulos, nomArt, desArt, preArt e idArt
    this.service.articulosVendedor(this.idVen).subscribe(res => {
      this.respuesta = res;
      console.log("articulos: " + JSON.stringify(res));
      console.log("Cantidad articulos: " + res.length)
      for (let i=0; i < res.length; i++) {
        this.modelo.idArt = res[i].id;
        this.modelo.nomArt = res[i].nombre;
        this.desArt = res[i].detalles;
        this.preArt = res[i].precio;
        if(res[i].envio) {
          this.envArt = 'envío y retiro';
        }else {
          this.envArt = 'retiro'
        }  
        //nombre categoria producto
        for (let i=0; i < this.listcategorias.length; i++) {
          if (this.respuesta[1].idTipoProducto == this.listcategorias[i].id) {
            this.modelo.catArt = JSON.stringify(this.listcategorias[i].name.charAt(0).toUpperCase() + this.listcategorias[i].name.slice(1));
            this.modelo.catArt = this.modelo.catArt.slice(1, this.modelo.catArt.length-1);
          }
          if (this.modelo.catArt != this.listcategorias[i].name.charAt(0).toUpperCase() + this.listcategorias[i].name.slice(1)) {
            let newList = this.modelo.cat;
            newList.push(this.listcategorias[i]);
            this.modelo.cat = newList;
          }
        }
      }  
    })
  }
  //redirecciones acciones
  redireccion1() {
    localStorage.setItem('idProd', JSON.stringify(this.modelo.idArt));
    this.router.navigate(['vista-articulo']);
  }
  redireccion2() {
    localStorage.setItem('idProd', JSON.stringify(this.modelo.idArt));
    this.router.navigate(['modificar-articulo']);    
  }
  redireccion3() {
    localStorage.setItem('idProd', JSON.stringify(this.modelo.idArt));
    // this.router.navigate(['modificar-articulo']);    
  }
}

  
