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
  articulos: any = [];
  modelo: any = {
    nomArt: '',
    nomVen: '',    
    catArt: '',
    idArt: 0,
    desArt: '',
    preArt: '',
    envArt: '',
    
  }
  listcategorias: any[] = [];

  pagArt: string = '';
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
    }
    //nombre vendedor
    this.service.infoVendedor(this.idVen).subscribe(resVen => {
      this.modelo.nomVen = JSON.stringify(resVen.firstName.charAt(0).toUpperCase() + resVen.firstName.slice(1) + ' ' + (resVen.lastName.charAt(0).toUpperCase() + resVen.lastName.slice(1)));
      this.modelo.nomVen = this.modelo.nomVen.slice(1, this.modelo.nomVen.length-1);
      console.log("modelo 1: " + this.modelo.nomVen)
    });
    //traer lista de categorias
    this.service.getCategories().subscribe(resCat => {this.listcategorias = resCat; 
      // console.log("cateogrías: " + JSON.stringify(this.listcategorias))
    });
    //traer articulos, nomArt, desArt, preArt e idArt
    this.service.articulosVendedor(this.idVen).subscribe(res => {
      this.respuesta = res;
      // console.log("articulos: " + JSON.stringify(res));
      console.log("Cantidad articulos: " + res.length)
      for (let i=0; i < 5; i++) {
        this.modelo.idArt = res[i].id;
        this.modelo.nomArt = res[i].nombre;
        this.modelo.desArt = res[i].detalles;
        this.modelo.preArt = res[i].precio;
        if(res[i].envio) {
          this.modelo.envArt = 'envío y retiro';
        }else {
          this.modelo.envArt = 'retiro'
        }  
        // console.log("modelo 2: " + JSON.stringify(this.modelo))
        
        //nombre categoria producto
        // console.log("Id prod para cat: " + this.respuesta[i].idTipoProducto)
        // console.log("Largo cat: " + this.listcategorias.length)
        if (this.modelo.catArt == '') {
          for (let j=0; j < this.listcategorias.length; j++) {
            console.log("respuesta id: " + this.respuesta[i].idTipoProducto)
            if (this.respuesta[i].idTipoProducto == this.listcategorias[j].id) {
              this.modelo.catArt = JSON.stringify(this.listcategorias[j].name.charAt(0).toUpperCase() + this.listcategorias[j].name.slice(1));
              this.modelo.catArt = this.modelo.catArt.slice(1, this.modelo.catArt.length-1);
              // console.log("nomCat: " + this.modelo.catArt)
              // console.log("modelo 3: " + JSON.stringify(this.modelo))
            }
          }
        }
        
        // console.log("articulos!!: " + JSON.stringify(this.articulos))
        // console.log("(iteración) modelo:" + i + JSON.stringify(this.modelo))
        this.articulos.push(this.modelo)
        console.log("articulo individual:" + (i+1) + JSON.stringify(this.articulos[i]))
        this.modelo.catArt = '';
        // console.log("articulos todos:" + (i+1) + JSON.stringify(this.articulos))
      }  
      // console.log("Lista articulos: " + JSON.stringify(this.articulos))
      // console.log("articulos final: " + JSON.stringify(this.articulos[0]))
    })
  }
  //redirecciones acciones
  redireccion1(idProd: number) {
    // localStorage.setItem('idProd', idProd.toString());
    console.log("idProd: " + idProd.toString())
    // this.router.navigate(['vista-articulo']);
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

  
