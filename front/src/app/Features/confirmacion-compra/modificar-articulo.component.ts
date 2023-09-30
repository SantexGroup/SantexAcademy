import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajeService } from 'src/app/core/services/mensaje.service';
import { CargaArticulosService } from 'src/app/core/services/carga-articulos.service';
import { ConfirmacionArticuloServService } from 'src/app/core/services/confirmacion-articulo-serv.service';
import { BarraService } from 'src/app/core/services/barra.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { vistaArtIndServ } from 'src/app/core/services/vista-art-ind-serv.service';
import { environment } from 'src/environments/environment';
import { ModArtService } from 'src/app/core/services/mod-art.service';

@Component({
  selector: 'app-modificar-articulo',
  templateUrl: './modificar-articulo.component.html',
  styleUrls: ['./modificar-articulo.component.css']
})
export class ModificarArticuloComponent implements OnInit {

  

  infoLocal: any = {};
  idProd: any = {};
  respuesta: any = [];
  cat: any = [];
  nomArt: string = '';
  artInd: any = {};
  descArt: string = '';
  precioArt: number = 0;
  catArt: string = '';
  envio1: string = '';
  envio2: string = '';
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

  constructor(private cargaService: CargaArticulosService, private service: ModArtService, private vistaArtService: vistaArtIndServ, private confService: ConfirmacionArticuloServService, private router: Router, private mensajeService: MensajeService, private barraService:BarraService, private formBuilder: FormBuilder) { }

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
    console.log("id: " + JSON.stringify(this.idProd))
  }

  traerDatos() {
    this.barraService.getCategories().subscribe(categorias => {this.listcategorias = categorias});
    let id = Number(localStorage.getItem('idProd'));
    this.idProd = id;
    if (id) {
        this.vistaArtService.datosProdServ(id).subscribe(res => {
          this.respuesta = res;
          console.log("Respuesta: " + JSON.stringify(res));
          this.nomArt = res.articulos.nombre.charAt(0).toUpperCase() + res.articulos.nombre.slice(1) 
          this.descArt = res.articulos.detalles.charAt(0).toUpperCase() + res.articulos.detalles.slice(1)
          this.precioArt = res.articulos.precio
          this.catArt = JSON.stringify(res.tipo.name.charAt(0).toUpperCase() + res.tipo.name.slice(1))
          this.catArt = this.catArt.slice(1, this.catArt.length-1)
          this.artInd = res.tipo.name
          for (let i = 0; i < this.listcategorias.length; i++){
            if (this.listcategorias[i].name !== this.artInd) {
              let newList = this.cat
              newList.push(this.listcategorias[i])
              this.cat = newList;
            }
          }    
          if (res.articulos.Images){
            const imagesProd = res.articulos.Images
            for (let i = 0; i < imagesProd.length; i++){
              this.uploadedImages.push(this.servidor + imagesProd[i].url);
            }
          }
        })        
      }      
    }

  modificarProducto(): void { 
    //if (this.formUp.get('catReg')?.value && this.formUp.get('nomReg')?.value && this.desReg && this.preReg && this.envReg) {
      this.service.modificar(
        this.idProd,
        this.idUser,
        this.formUp.get('catReg')?.value,
        this.formUp.get('nomReg')?.value,
        this.formUp.get('desReg')?.value,
        this.formUp.get('preReg')?.value,
        this.formUp.get('envReg')?.value,             
      ).subscribe(respuesta => {
        console.log(respuesta);
        if(respuesta){
          this.idProducto = respuesta.id;
          console.log("Respuesta service modArt: " + this.idProducto)
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

    this.cargaService.cargaFiles(formData).subscribe(res => {
      console.log(res);
      if(res){
        for (let i = 0; i < res.length; i++) {
          const imageName = res[i].filename;
          this.cargaService.cargaImagesNames(this.idProducto, imageName).subscribe( res =>
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
            this.uploadedImages.length = 0;
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