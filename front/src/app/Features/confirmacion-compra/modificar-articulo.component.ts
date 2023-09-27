import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajeService } from 'src/app/core/services/mensaje.service';
import { CargaArticulosService } from 'src/app/core/services/carga-articulos.service';
import { ConfirmacionArticuloServService } from 'src/app/core/services/confirmacion-articulo-serv.service';
import { BarraService } from 'src/app/core/services/barra.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { vistaArtIndServ } from 'src/app/core/services/vista-art-ind-serv.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-modificar-articulo',
  templateUrl: './modificar-articulo.component.html',
  styleUrls: ['./modificar-articulo.component.css']
})
export class ModificarArticuloComponent implements OnInit {

  

  infoLocal: any = {};
  idProd: any = {};
  respuesta: any = [];
  nomArt: string = '';
  descArt: string = '';
  precioArt: number = 0;
  catArt: string = '';
  servidor: string = environment.API_URL + '/images/';
  

  /*
  catReg: string = '0';
  nomReg: string = '';
  desReg: string = '';
  preReg: string = '';
  envReg: string = '';
  */

  idUser: string = '';
  confVendedor: boolean = false;
  mensajeRegistro: string = '';
  listcategorias: any[] = [];
  uploadedImages: string[] = [];
  idProducto: string = '';
  images: any = [];

  constructor(private service: CargaArticulosService, private vistaArtService: vistaArtIndServ, private confService: ConfirmacionArticuloServService, private router: Router, private mensajeService: MensajeService, private barraService:BarraService, private formBuilder: FormBuilder) { }

  formUp = this.formBuilder.group({
    'catReg': ['0', Validators.required],
    'nomReg': ['', Validators.required],
    'desReg': ['', Validators.required],
    'preReg': ['', Validators.required],
    'envReg': ['0', Validators.required],
    'images': ['', Validators.required],
  });

  ngOnInit(): void {
    this.traerDatos();
    this.getIdUser();

    this.barraService.getCategories().subscribe(categorias => {this.listcategorias = categorias});
  }

  traerDatos() {
    let idProdSt = localStorage.getItem('idProd');
    let idProd = Number(idProdSt)
    if (idProd) {
        this.vistaArtService.datosProdServ(idProd).subscribe(res => {
          this.respuesta = res;
          console.log("Respuesta: " + JSON.stringify(this.respuesta));
          
          this.nomArt = res.articulos.nombre.charAt(0).toUpperCase() + res.articulos.nombre.slice(1) 
          this.descArt = res.articulos.detalles.charAt(0).toUpperCase() + res.articulos.detalles.slice(1)
          this.precioArt = res.articulos.precio
          this.catArt = JSON.stringify(res.tipo.name.charAt(0).toUpperCase() + res.tipo.name.slice(1))
          console.log("Descripción: " + this.descArt)
          console.log("precio: " + this.precioArt)
    
          if (res.articulos.Images){
            const imagesProd = res.articulos.Images
            for (let i = 0; i < imagesProd.length; i++){
              this.images.push(this.servidor + imagesProd[i].url);
            }
          }
        })
        console.log("imágenes: " + this.images);
        console.log("precio: " + this.precioArt); //porque esto lo tira como 0 pero en el html tira el número real??
      }
    }
  

  // traerDatos() {
  //   console.log("infoLocal 2: " + JSON.stringify(this.infoLocal.idProd))
  //     this.confService.datosProd(this.infoLocal).subscribe(respuesta => {
  
  //     });
  // }

  subirProducto(): void { 
    //if (this.formUp.get('catReg')?.value && this.formUp.get('nomReg')?.value && this.desReg && this.preReg && this.envReg) {
      this.service.carga(
        this.formUp.get('catReg')?.value,
        this.formUp.get('nomReg')?.value,
        this.formUp.get('desReg')?.value,
        this.formUp.get('preReg')?.value,
        this.formUp.get('envReg')?.value,
        this.idUser
      ).subscribe(respuesta => {
        console.log(respuesta);
        if(respuesta){
          this.idProducto = respuesta.id;
          console.log(this.idProducto)
          this.subirImages();
        }
        this.mensajeService.mensajeRegistro('Articulo cargado con éxito.');
        this.router.navigate(['home-page']);
      });

      /*
    } else {
      this.mensajeService.mensajeRegistro('Campos incompletos. Por favor, complete todos los campos.');
    }
    */
  }

  subirImages() {

    const formData = new FormData();

    for(let img of this.images){
      formData.append('images', img);
    }

    this.service.cargaFiles(formData).subscribe(res => {
      console.log(res);
      if(res){
        for (let i = 0; i < res.length; i++) {
          const imageName = res[i].filename;
          this.service.cargaImagesNames(this.idProducto, imageName).subscribe( res =>
            console.log(res));
        }
      }  
    })
    console.log('carga exitosa de imagenes');
  }

  onFileSelected(event: any): void {
    
    //dejar de visualizar las imagenes cuando suba otra
    const files = event.target.files;
    this.images = files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.readAsDataURL(file);

          reader.onload = () => {
            this.uploadedImages.push(reader.result as string);
          };
        }
      }
    }
  }

  getIdUser() {    
    let infoLocal = localStorage.getItem('resLog')
    if (infoLocal) {
      let newObject = JSON.parse(infoLocal);

      const idUser = newObject[1].users.id;
      this.idUser = idUser;
      console.log(this.idUser)

      const vendedor = newObject[1].users.estadoDeVendedor;
      if (vendedor){
        this.confVendedor = true;
      }
    }
  }
}
