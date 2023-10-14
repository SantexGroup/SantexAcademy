import { Component, OnInit, ViewChild } from '@angular/core';
import { vistaArtIndServ } from 'src/app/core/services/vista-art-ind-serv.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BarraService } from 'src/app/core/services/barra.service';
import { FormControl, Validators, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vista-articulo-ind',
  templateUrl: './vista-articulo-ind.component.html',
  styleUrls: ['./vista-articulo-ind.component.css']
})
export class VistaArtIndComponent implements OnInit {

  //categorias
  listcategorias: any[] = [];
  catArt: string = '';
  cat: any = [];
  idCat: number = 0;
  // obtener imgs
  servidor: string = environment.API_URL + '/images/';
  images: string[] = [];
  imagenInicial: string = '';
  //id del producto
  id: number = 0;
  //id del usuario
  idUsuario: string = '';
  nomUSer: string = '';
  //Mayúsculas
  nombreArt: string = '';
  descArt: string = '';
    //seleccionables
  envSel: string = '';
  env: string = '';
  envBolOri: boolean = false;
  envBol: boolean = false;

  diasSel: number = 0;
  dias: number = 0;

  pagoSel: string = '';
  pago: string = '';
  pagoBolOri: boolean = false;
  pagoBol: boolean = false;
  //traer datos
  respuesta: any = [];
  respuestaUser: any = [];
  //estados logueo
  logeadoComprador: boolean = false;
  logeadoVendedor: boolean = false;
  logeadoVendedorProd: boolean = false;

  //tarjeta
  nombreTitular: string = '';
  numeroTarjeta: string = '';
  mesVencimiento: string = '';
  codigoSeguridad: string = '';

  formTarj: UntypedFormGroup;
  nombreTarjControl: FormControl = new FormControl('', [Validators.required, Validators.maxLength(30)]);
  numeroTarjControl: FormControl = new FormControl('', [Validators.required]);
  mesVencTarjControl: FormControl = new FormControl('', [Validators.required]);
  codSegTarjControl: FormControl = new FormControl('', [Validators.required]);

  // resultado alquiler
  alqcheck: boolean = false;
  alquilado: boolean = false;

  @ViewChild('seleccionables') test: any;
  
  constructor(private service: vistaArtIndServ, private router: Router, private barraService: BarraService, private uFormBuilder: UntypedFormBuilder, private location: Location) {

    this.formTarj = this.uFormBuilder.group({
      nombreTarj: this.nombreTarjControl,
      numeroTarj: this.numeroTarjControl,
      mesVencTarj: this.mesVencTarjControl,
      codSegTarj: this.codSegTarjControl
    });

   }

  ngOnInit(): void {
    this.getIdProd();
    this.datosProd(this.id);
    this.corroborarLogeo();
    this.corroborarVendedor();
  }

  getIdProd() {
    let idProd = localStorage.getItem('idProd');
    if (idProd) {
      let newObject = JSON.parse(idProd);
      this.id = newObject;
    }
  }
    //traer datos
    datosProd(id: number) {
      this.barraService.getCategories().subscribe(categorias => {this.listcategorias = categorias});
      this.service.datosProdServ(id).subscribe(res => {
        this.respuesta = res;
        console.log("Respuesta: " + JSON.stringify(this.respuesta));
        //reemplazar datos
        if(res) {
          //nombre art, desc y envio
          this.nombreArt = JSON.stringify(res.nombre);
          this.nombreArt = res.nombre.charAt(0).toUpperCase() + res.nombre.slice(1);
          this.descArt = JSON.stringify(res.detalles);
          this.descArt = res.detalles.charAt(0).toUpperCase() + res.detalles.slice(1);
          if (res.envio == true) {
            this.envBolOri = true;
          }
           //buscar categoria prod y eliminar de array
          for (let i=0; i < this.listcategorias.length; i++) {
            if (this.respuesta.idTipoProducto == this.listcategorias[i].id) {
              this.catArt = JSON.stringify(this.listcategorias[i].name.charAt(0).toUpperCase() + this.listcategorias[i].name.slice(1));
              this.catArt = this.catArt.slice(1, this.catArt.length-1);
              this.idCat = this.listcategorias[i].id;
              console.log("Categorái: " + this.catArt)
            }
            if (this.catArt != this.listcategorias[i].name.charAt(0).toUpperCase() + this.listcategorias[i].name.slice(1)) {
              let newList = this.cat;
              newList.push(this.listcategorias[i]);
              this.cat = newList;
            }
          }
          if (this.respuesta.Images){
            const imagesProd = this.respuesta.Images
            this.imagenInicial = this.servidor + imagesProd[0].url;
            for (let i = 0; i < imagesProd.length; i++){
              this.images.push(this.servidor + imagesProd[i].url);
            }
          }
          this.service.datosUsuario(this.respuesta.idUsuario).subscribe(user => {
            this.respuestaUser = user;
            this.nomUSer = this.respuestaUser.firstName.charAt(0).toUpperCase() + this.respuestaUser.firstName.slice(1) + ' ' + (this.respuestaUser.lastName.charAt(0).toUpperCase() + this.respuestaUser.lastName.slice(1));
          })
        }
      }) 
    }
  //corroborar logueos
  corroborarLogeo() {    
    let infoLocal = localStorage.getItem('resLog')
    if (infoLocal) {
      let newObject = JSON.parse(infoLocal);
      if (newObject) {
        if (newObject[1].users.estadoDeVendedor) {
          this.logeadoVendedor = true;
          this.logeadoComprador = false;
          this.idUsuario = newObject[1].users.id;
        } 
        else if (!newObject[1].users.estadoDeVendedor) {
          this.logeadoComprador = true;
          this.logeadoVendedor = false;
          this.idUsuario = newObject[1].users.id;
        }          
        else {
          this.logeadoComprador = false;
          this.logeadoVendedor = false;
        }
      }
    }
  }
  corroborarVendedor() {
    let infoLocal = localStorage.getItem('resLog')
    if (infoLocal) {
      let newObject = JSON.parse(infoLocal);
      if (newObject) {
        if (newObject[1].users.id == this.id) {

          this.logeadoVendedorProd = true;
        }
      }
    }
  }
  // reemplazar imagen clickeada
  cambiarImagen(url: string) {
    this.imagenInicial = url;
  }
  //mensaje de alerta
  mensajeDias() {
    Swal.fire({
      icon: 'info',
      title: 'Perfecto!',
      text: 'El envío o retiro su producto tendrá un plazo de 2 días',
      confirmButtonText: "Ok"
    })  
  }
  //seleccionables
  capturarEnvio() {
    this.env = this.envSel;
    console.log(this.env)
    if (this.env == "envio") {
      this.envBol = true;
    } else {
      this.envBol = false;
    }
  }
  capturarDias() {
    this.dias = this.diasSel;
  }
  capturarPago() {
    this.pago = this.pagoSel;
    if (this.pago == "tarjeta") {
      this.pagoBol = true;
    } else {
      this.pagoBol = false;
    }
  }

  // control del form
  formControl() {
    this.test.control.markAsTouched();
    this.test.control.markAsDirty();
    console.log(this.test);
  }

  //confirmación
  botAlq() {
      this.service.newAlquiler(this.id, this.idUsuario, this.envBol, this.dias, this.pago).subscribe(res => {
        console.log(res);
        if (res[0] && res[1]) {
          this.alqcheck = true;
          this.alquilado = true;
        } else {
          this.alqcheck = true;
          this.alquilado = false;
        }
      })
    }

  redirect() {
      this.router.navigate(['/historial-compras']);
    }
  redireccion() {
    this.location.back();
  }
  redirigirCategoria() {
    this.router.navigate(['categorias/' + this.idCat]);
  }
  alertaVen() {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'No puede contratar su propio servicio!',
      confirmButtonText: "Ok"
    })
  }
}