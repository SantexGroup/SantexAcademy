import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MensajeService } from 'src/app/core/services/mensaje.service';
import { CargaArticulosService } from 'src/app/core/services/carga-articulos.service';
import { BarraService } from 'src/app/core/services/barra.service';

@Component({
  selector: 'app-carga-articulos',
  templateUrl: './carga-articulos.component.html',
  styleUrls: ['./carga-articulos.component.css']
})
export class CargaArticulosComponent implements OnInit {

  catReg: string = '0';
  nomReg: string = '';
  desReg: string = '';
  preReg: string = '';
  envReg: string = '';
  idUser: string = '';
  
  mensajeRegistro: string = '';

  listcategorias: any[] = [];

  uploadedImages: string[] = [];

  constructor(private service: CargaArticulosService, private router: Router, private mensajeService: MensajeService, private barraService:BarraService) { }

  ngOnInit(): void {

    this.getIdUser();

    this.barraService.getCategories().subscribe(categorias => {this.listcategorias = categorias});

    const $form = document.querySelector('#form-art');

    $form?.addEventListener('submit', (event: any) => {
      //event.preventDefault();
      const formData = new FormData(event.currentTarget);
      //const images = formData.get('images'); //obtengo solo la img
      this.service.cargaFiles(formData).subscribe(res => {
        console.log(res);
        console.log('carga exitosa');
      })
    })
  }

  subirProducto() { 
    if (this.catReg && this.nomReg && this.desReg && this.preReg && this.envReg) {
      this.service.carga(
        this.catReg,
        this.nomReg,
        this.desReg,
        this.preReg,
        this.envReg,
        this.idUser
      ).subscribe(respuesta => {
        console.log(respuesta);
        this.mensajeService.mensajeRegistro('Articulo cargado con éxito.');
        this.router.navigate(['home-page']);
      });
    } else {
      this.mensajeService.mensajeRegistro('Campos incompletos. Por favor, complete todos los campos.');
    }
  }


  onFileSelected(event: any): void {
    
    //dejar de visualizar las imagenes cuando suba otra
    this.uploadedImages = [];
    const files = event.target.files;
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
    }
  }

}