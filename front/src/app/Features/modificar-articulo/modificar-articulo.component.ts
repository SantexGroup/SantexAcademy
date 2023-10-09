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

  // traer datos
  infoLocal: any = {};
  idProd: any = {};
  respuesta: any = [];
  cat: any = [];
  nomArt: string = '';
  descArt: string = '';
  precioArt: number = 0;
  catArt: string = '';
  envios: string[] = ['Envío a domicilio', 'Buscar en local']
  textoCarga: string = '';
  uploadedImages: string[] = [];
  servidor: string = environment.API_URL + '/images/';
  // modificar articulo
  idUser: string = '';
  idProducto: string = '';
  confVendedor: boolean = false;
  mensajeRegistro: string = '';
  listcategorias: any[] = [];
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
  }

  traerDatos() {
    this.barraService.getCategories().subscribe(categorias => {this.listcategorias = categorias});
    let id = Number(localStorage.getItem('idProd'));
    this.idProd = id;
    if (id) {
      this.vistaArtService.datosProdServ(id).subscribe(res => {
        this.respuesta = res;
        console.log("Respuesta: " + JSON.stringify(res));
        //reemplazar nom, det y pre
        this.nomArt = res.nombre.charAt(0).toUpperCase() + res.nombre.slice(1);
        this.descArt = res.detalles.charAt(0).toUpperCase() + res.detalles.slice(1);
        this.precioArt = res.precio;
        //buscar categoria prod y eliminar de array
        for (let i=0; i < this.listcategorias.length; i++) {
          if (res.idTipoProducto == this.listcategorias[i].id) {
            this.catArt = JSON.stringify(this.listcategorias[i].name.charAt(0).toUpperCase() + this.listcategorias[i].name.slice(1));
            this.catArt = this.catArt.slice(1, this.catArt.length-1);
          }
          if (this.catArt != this.listcategorias[i].name.charAt(0).toUpperCase() + this.listcategorias[i].name.slice(1)) {
            let newList = this.cat;
            newList.push(this.listcategorias[i]);
            this.cat = newList;
          }
        }
        //reemplazar envio
        if (!this.respuesta.envio) {this.envios = ['Buscar en local', 'Envío a domicilio']}
        //reemplazar imagenes y texto de imágenes
        if (res.Images){
          const imagesProd = res.Images;
          for (let i = 0; i < imagesProd.length; i++){this.uploadedImages.push(this.servidor + imagesProd[i].url);
          }
        }
        if (res) {this.textoCarga = '(' + JSON.stringify(this.uploadedImages.length) + ') Imágenes seleccionadas';}
        if (!res.Images) {this.textoCarga = '(0) Imágenes seleccionadas'};
      })        
    }      
  }
  getIdUser() {    
    let infoLocal = localStorage.getItem('resLog');
    if (infoLocal) {
      let newObject = JSON.parse(infoLocal);
      const idUser = newObject[1].users.id;
      this.idUser = idUser;
      const vendedor = newObject[1].users.estadoDeVendedor;
      if (vendedor){
       this.confVendedor = true;
      }
    }
  }
  reemplazarImagen(event: any): void {
    const files = event.target.files;
    this.images = files;
    this.uploadedImages.length = 0;
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
        if (i == files.length-1) {
          this.textoCarga = '(' + files.length + ') Imágenes seleccionadas'
        }
      }    
    }
  }
  quitarImagen(image: string) {
    if (confirm("¿Desea eliminar imagen?") == true) {
      for (let i=0; i < this.uploadedImages.length; i++) {
        if (image == this.uploadedImages[i]) {
          this.uploadedImages.splice(i, 1);
        }
        this.textoCarga = '(' + (this.uploadedImages.length) + ') Imágenes seleccionadas'
      }
    }    
  }
  modificarProducto(): void { 
    this.service.modificar(
      this.idProd,
      this.idUser,
      this.formUp.get('catReg')?.value,
      this.formUp.get('nomReg')?.value,
      this.formUp.get('desReg')?.value,
      this.formUp.get('preReg')?.value,
      this.formUp.get('envReg')?.value,             
    ).subscribe(respuesta => {
      if(respuesta){
        this.idProducto = respuesta.id;
        console.log("Respuesta service modArt: " + this.idProducto)
        this.subirImages();
      }
      this.mensajeService.mensajeRegistro('Articulo modificado con éxito.');
      this.router.navigate(['home-page']);
    });
  }
  subirImages() {
    const formData = new FormData();
    for(let img of this.images){
      formData.append('images', img);
    }
    this.cargaService.cargaFiles(formData).subscribe(res => {
      if(res){
        for (let i = 0; i < res.length; i++) {
          const imageName = res[i].filename;
          this.cargaService.cargaImagesNames(this.idProducto, imageName).subscribe(res => console.log(res));
        }
      }  
    })
  }  
}