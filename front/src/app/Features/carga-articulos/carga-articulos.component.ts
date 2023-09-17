import { Component, OnInit } from '@angular/core';
import { CargaArticulosService } from 'src/app/core/services/carga-articulos.service';

@Component({
  selector: 'app-carga-articulos',
  templateUrl: './carga-articulos.component.html',
  styleUrls: ['./carga-articulos.component.css']
})
export class CargaArticulosComponent implements OnInit {

  uploadedImages: string[] = [];

  constructor(private service: CargaArticulosService) { }

  ngOnInit(): void {

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
}
