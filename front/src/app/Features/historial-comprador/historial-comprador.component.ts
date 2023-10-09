import { Component, OnInit } from '@angular/core';
import { HisComService } from 'src/app/core/services/his-com.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-historial-comprador',
  templateUrl: './historial-comprador.component.html',
  styleUrls: ['./historial-comprador.component.css']
})
export class HistorialCompradorComponent implements OnInit {
  
  idCom: number = 0;
  nomCom: string = '';

  listcategorias: any[] = [];
  articulos: any = [];  
  modelo: any = {
    imaArt: '',
    nomArt: '',
    nomVen: '',    
    catArt: '',
    idArt: 0,
    desArt: '',
    preArt: '',
    envArt: '',
    idCat: 0,
  };
  pagArt: string = '';
  articulosVen: any = [];
  datosLog: any = {};
  respuesta: any = [];
  servidor: string = environment.API_URL + '/images/';

  constructor(private service: HisComService, private router: Router) { }

  ngOnInit(): void {
    this.datos();
  }

  datos() {
    //leer local
    let datosLog = localStorage.getItem('resLog');
    if (datosLog) {
      let newObject = JSON.parse(datosLog);
      this.datosLog = newObject;
      this.idCom = this.datosLog[1].users.id;
    }else{
      alert("No está logueado")
    }
    //traer y reemplazar nombre comprador
    this.service.infoComprador(this.idCom).subscribe(resCom => {
      this.nomCom = JSON.stringify(resCom.firstName.charAt(0).toUpperCase() + resCom.firstName.slice(1) + ' ' + (resCom.lastName.charAt(0).toUpperCase() + resCom.lastName.slice(1)));
      this.nomCom = this.nomCom.slice(1, this.nomCom.length-1);
      console.log("nombre comprador: " + this.nomCom);
    });
    //traer lista de categorias
    this.service.getCategories().subscribe(resCat => {this.listcategorias = resCat});
    //traer articulos
    this.service.articulosComprador(this.idCom).subscribe(res => {
      this.respuesta = res;
      console.log("respuesta: " + JSON.stringify(res));
      if (JSON.stringify(res.message) == '"Usuario sin productos publicados"') {
        alert("No tiene productos cargados");
      }
      //reemplazar nomVen, idArt, imaArt, nomArt, desArt, preArt y envArt
      for (let i=0; i < res.length; i++) {
        console.log("Imagen prod: " + i + JSON.stringify(res[i].Product));
        this.modelo.imaArt = this.servidor + res[i].Product.Images[0].url;
        console.log("Img:" + this.respuesta[i].Product.Images[0])
        this.modelo.idArt = res[i].idProducto;
        // this.modelo.nomVen = ;
        this.modelo.nomArt = res[i].Product.nombre;
        this.modelo.desArt = res[i].Product.detalles;
        this.modelo.preArt = res[i].Product.id;
        if(res[i].Product.envio) {
          this.modelo.envArt = 'Envío y retiro';
        }else {
          this.modelo.envArt = 'Retiro';
        }  
        //reemplazar categoria
        if (this.modelo.catArt == '') {
          for (let j=0; j < this.listcategorias.length; j++) {
            if (this.respuesta[i].Product.idTipoProducto+1 == this.listcategorias[j].id) { //revisar porque en la DB hay 4 valores para idTipoProducto
              this.modelo.catArt = JSON.stringify(this.listcategorias[j].name.charAt(0).toUpperCase() + this.listcategorias[j].name.slice(1));
              this.modelo.catArt = this.modelo.catArt.slice(1, this.modelo.catArt.length-1);
              this.modelo.idCat = this.listcategorias[j].id;
            }
          }
        }
        //pushear articulo individual en array de articulos
        console.log("modelo: " + i + this.modelo)
        this.articulos.push({ ...this.modelo });
        this.modelo.catArt = '';
      }  
    })
  }
  //acciones
  redirigirCategoria(idCat: number) {
    localStorage.setItem('idCat', idCat.toString());
    this.router.navigate(['/']);
  }
  visualizar(idProd: number) {
    localStorage.setItem('idProd', idProd.toString());
    this.router.navigate(['vista-articulo']);
  }
}