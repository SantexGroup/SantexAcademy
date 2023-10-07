import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  imageUrls: string[] = [

    "https://res.cloudinary.com/carina-bosio/image/upload/v1696610101/xAcademy/Rezise/Hero-0_zxnloy.png",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1696610101/xAcademy/Rezise/hero-1_tocfne.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1696610097/xAcademy/Rezise/hero-2_muuhik.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1696610097/xAcademy/Rezise/hero-3_gjwqm8.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1696611699/xAcademy/Rezise/Extensi%C3%B3n/hero-4_zg4flu.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1696610098/xAcademy/Rezise/Hero-5_tfmktv.png",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1696610097/xAcademy/Rezise/Hero-6_z1laxu.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1696610098/xAcademy/Rezise/Hero-7_of0fce.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1696610099/xAcademy/Rezise/Hero-8_mlwv5c.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1696610099/xAcademy/Rezise/Hero-9_pq6htw.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1696610099/xAcademy/Rezise/Hero-10_aycxt9.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1696611680/xAcademy/Rezise/Extensi%C3%B3n/Hero-11_e2jwk2.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1696611676/xAcademy/Rezise/Extensi%C3%B3n/Hero-12_boi23a.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1696610100/xAcademy/Rezise/Hero-13_djqm33.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1696611677/xAcademy/Rezise/Extensi%C3%B3n/Hero-14_retix7.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1696610100/xAcademy/Rezise/Hero-15_yzfdrv.png",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1696610100/xAcademy/Rezise/Hero-16_onh0tt.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1696610100/xAcademy/Rezise/Hero-17_qu8gy0.jpg",

  ];

  // Dividir las imágenes en bloques de 6
  imageBlocks: string[][] = [];

  constructor() {
    this.imageBlocks = this.chunkArray(this.imageUrls, 6);
  }

  private chunkArray(array: string[], chunkSize: number): string[][] {
    const chunks: string[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

}
