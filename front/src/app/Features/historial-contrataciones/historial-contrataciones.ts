import { Component, OnInit } from '@angular/core';
import { HisContService } from 'src/app/core/services/his-cont.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-historial-contrataciones',
  templateUrl: './historial-contrataciones.component.html',
  styleUrls: ['./historial-contrataciones.component.css']
})
export class HistorialContratacionesComponent implements OnInit {

  idVen: number = 0;
  date: Date = new Date;
  idArt: number = 0;

  listcategorias: any[] = [];
  articulos: any = [];  
  modelo: any = {
    imaArt: '',
    nomArt: '',
    nomCom: '',    
    estArt: '',
    idArt: 0,
    desArt: '',
    preArt: '',
    fecArt: '',
    retArt: '',
    envArt: '',
    formaPago: '',
    idCat: 0,
    dirCom: '',
  };
  pagArt: string = '';
  articulosVen: any = [];
  datosLog: any = {};
  respuesta: any = [];
  servidor: string = environment.API_URL + '/images/';
  
  confUsuario: boolean = false;
  idUser: string = '';

  constructor(private service: HisContService, private router: Router) { }

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
      this.idVen = this.datosLog[1].users.id;
    }else{
      Swal.fire({
        icon: 'error',
        title: 'No se encuentra logueado',
        confirmButtonText: "Ok"
      })
    }
    //traer lista de categorias
    this.service.getCategories().subscribe(resCat => {this.listcategorias = resCat});
    //traer articulos
    this.service.articulosContratados(this.idVen).subscribe(res => {
      this.respuesta = res;
      console.log("respuesta: " + JSON.stringify(res[2]));
      if (JSON.stringify(res.message) == '"Usuario sin artículos contratados todavía"') {
        Swal.fire({
          icon: 'error',
          title: 'No tiene productos cargados',
          confirmButtonText: "Ok"
        });
        this.router.navigateByUrl('/');
      }
      //reemplazar imaArt, idArt, nomCom, nomArt, desArt, preArt, fecArt y envArt
      for (let i=0; i < res.length; i++) {
        this.modelo.imaArt = this.servidor + res[i].Product.Images[0].url;
        this.modelo.idArt = res[i].idProducto;
        this.modelo.nomCom = res[i].User.firstName.charAt(0).toUpperCase() + res[i].User.firstName.slice(1) + ' ' + (res[i].User.lastName.charAt(0).toUpperCase() + res[i].User.lastName.slice(1));
        this.modelo.nomArt = res[i].Product.nombre.charAt(0).toUpperCase() + res[i].Product.nombre.slice(1);
        this.modelo.desArt = res[i].Product.detalles.charAt(0).toUpperCase() + res[i].Product.detalles.slice(1);;
        this.modelo.preArt = res[i].Product.precio;
        this.modelo.fecArt = res[i].createdAt.slice(0, 10);
        console.log("fecha individual: " + this.modelo.fecArt)
        this.date = new Date(res[i].createdAt);
        this.date.setDate( this.date.getDate() + 3 );  ;
        this.modelo.retArt = JSON.stringify(this.date);
        this.modelo.retArt = this.modelo.retArt.slice(1, 11);
        console.log("direccion: " + JSON.stringify(res[i].User.direccion.calleYAltura));
        this.modelo.dirCom = res[i].User.direccion.calleYAltura;
        if(res[i].modoEnvio == true) {
          this.modelo.envArt = 'Envío y retiro';
        }else {
          this.modelo.envArt = 'En local';
        }  
        if(res[i].Product.estado) {
          this.modelo.estArt = 'Disponible'
        }else {
          this.modelo.estArt = 'Actualmente contratado'
        }
        this.modelo.formaPago = res[i].formaPago;
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
        this.articulos.push({ ...this.modelo });
        console.log("articulo individual: " + JSON.stringify(this.articulos[i]))
        this.modelo.catArt = '';
        
      } 
      console.log("articulos todos: " + JSON.stringify(this.articulos)) 
    })
    
  }
  //acciones
  redirigirCategoria(idCat: string) {
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
  numArt(idArt: number) {
    this.idArt = idArt;
  }
}
