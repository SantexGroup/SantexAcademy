import { Component, OnInit } from '@angular/core';
import { HisComService } from 'src/app/core/services/his-com.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historial-comprador',
  templateUrl: './historial-comprador.component.html',
  styleUrls: ['./historial-comprador.component.css']
})
export class HistorialCompradorComponent implements OnInit {
  
  idCom: number = 0;
  nomCom: string = '';
  dniCom: string = '';
  dirCom: string = '';
  date: Date = new Date;

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
    fecArt: '',
    retArt: '',
    envArt: '',
    formaPago: '',
    idCat: 0,
  };
  pagArt: string = '';
  articulosVen: any = [];
  datosLog: any = {};
  respuesta: any = [];
  servidor: string = environment.API_URL + '/images/';
  
  confUsuario: boolean = false;
  idUser: string = '';

  constructor(private service: HisComService, private router: Router) { }

  ngOnInit(): void {
    this.datos();
    this.getIdUser();
  }

  datos() {
    //leer local
    let datosLog = localStorage.getItem('resLog');
    if (datosLog) {
      let newObject = JSON.parse(datosLog);
      this.datosLog = newObject;
      this.idCom = this.datosLog[1].users.id;
      this.dniCom = this.datosLog[1].users.dni;
    }else{
      Swal.fire({
        icon: 'error',
        title: 'No se encuentra logueado',
        confirmButtonText: "Ok"
      })
    }
    //traer y reemplazar nombre comprador
    this.service.infoComprador(this.idCom).subscribe(resCom => {
      this.nomCom = JSON.stringify(resCom.firstName.charAt(0).toUpperCase() + resCom.firstName.slice(1) + ' ' + (resCom.lastName.charAt(0).toUpperCase() + resCom.lastName.slice(1)));
      this.nomCom = this.nomCom.slice(1, this.nomCom.length-1);
      console.log("nombre comprador: " + this.nomCom);
      this.dirCom = resCom.direccion.calleYaltura;
    });
    //traer lista de categorias
    this.service.getCategories().subscribe(resCat => {this.listcategorias = resCat});
    //traer articulos
    this.service.articulosComprador(this.idCom).subscribe(res => {
      this.respuesta = res;
      console.log("respuesta: " + JSON.stringify(res));
      if (JSON.stringify(res.message) == '"Usuario sin productos publicados"') {
        Swal.fire({
          icon: 'error',
          title: 'No tiene productos cargados',
          confirmButtonText: "Ok"
        });
        this.router.navigateByUrl('/');
      }
      //reemplazar imaArt, idArt, nomVen, nomArt, desArt, preArt, fecArt y envArt
      for (let i=0; i < res.length; i++) {
        console.log("Imagen prod: " + i + JSON.stringify(res[i].Product));
        this.modelo.imaArt = this.servidor + res[i].Product.Images[0].url;
        this.modelo.idArt = res[i].idProducto;
        this.modelo.nomVen = res[i].Product.User.firstName.charAt(0).toUpperCase() + res[i].Product.User.firstName.slice(1) + ' ' + (res[i].Product.User.lastName.charAt(0).toUpperCase() + res[i].Product.User.lastName.slice(1));
        this.modelo.nomArt = res[i].Product.nombre.charAt(0).toUpperCase() + res[i].Product.nombre.slice(1);
        this.modelo.desArt = res[i].Product.detalles.charAt(0).toUpperCase() + res[i].Product.detalles.slice(1);;
        this.modelo.preArt = res[i].Product.precio;
        this.modelo.fecArt = res[i].createdAt.slice(0, 10);
        this.date = new Date(res[i].createdAt);
        this.date.setDate( this.date.getDate() + 3 );  ;
        this.modelo.retArt = JSON.stringify(this.date);
        this.modelo.retArt = this.modelo.retArt.slice(1, 11);
        if(res[i].modoEnvio == true) {
          this.modelo.envArt = 'Envío y retiro';
        }else {
          this.modelo.envArt = 'En local';
        }  
        this.modelo.formaPago = res[i].formaPago;
        console.log(res[i].formaPago);
        //reemplazar categoria
        if (this.modelo.catArt == '') {
          for (let j=0; j < this.listcategorias.length; j++) {
            if (this.respuesta[i].Product.idTipoProducto == this.listcategorias[j].id) {
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
  redirigirCategoria(idCat: string) {
    // el comp de categorias no solicita datos del local storage, solo el id de categoria en la ruta:
    this.router.navigate(['/categorias', idCat]);
  }
  redirigirProducto(idProd: number) {
    localStorage.setItem('idProd', idProd.toString());
    this.router.navigate(['vista-articulo']);
  }
  getIdUser() {    
    let infoLocal = localStorage.getItem('resLog');
    if (infoLocal) {
      let newObject = JSON.parse(infoLocal);
      const idUser = newObject[1].users.id;
      this.idUser = idUser;
      if (idUser) {
        this.confUsuario = true; 
      } else {
        this.confUsuario = false; 
      }
    }
  }
}