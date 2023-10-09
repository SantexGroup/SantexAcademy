import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajeService } from 'src/app/core/services/mensaje.service';
import { CargaArticulosService } from 'src/app/core/services/carga-articulos.service';
import { BarraService } from 'src/app/core/services/barra.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carga-articulos',
  templateUrl: './carga-articulos.component.html',
  styleUrls: ['./carga-articulos.component.css']
})
export class CargaArticulosComponent implements OnInit {

  textoCarga: string = '(0) Imágenes seleccionadas';
  idUser: string = '';
  confVendedor: boolean = false;
  mensajeRegistro: string = '';
  listcategorias: any[] = [];
  uploadedImages: string[] = [];
  idProducto: string = '';
  images: any = [];
  formUp = this.formBuilder.group({
    'catReg': ['0', Validators.required],
    'nomReg': ['', Validators.required],
    'desReg': ['', Validators.required],
    'preReg': ['', Validators.required],
    'envReg': ['0', Validators.required],
    'images': ['', Validators.required],
  });

  constructor(private service: CargaArticulosService, private router: Router, private mensajeService: MensajeService, private barraService:BarraService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getIdUser();
    this.barraService.getCategories().subscribe(categorias => {this.listcategorias = categorias});
  }
  subirProducto(): void { 
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
  getIdUser() {    
    let infoLocal = localStorage.getItem('resLog')
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
}