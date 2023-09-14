import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carga-articulos',
  templateUrl: './carga-articulos.component.html',
  styleUrls: ['./carga-articulos.component.css']
})
export class CargaArticulosComponent implements OnInit {

  uploadedImages: string[] = [];

  constructor() { }

  ngOnInit(): void {
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
