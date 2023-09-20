import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  imageUrls: string[] = [

    "https://res.cloudinary.com/carina-bosio/image/upload/v1694891864/xAcademy/Img-Hero/Hero-0_odhrxc.png",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1694891367/xAcademy/Img-Hero/hero-1_mxkatw.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1694890618/xAcademy/Img-Hero/hero-2_rwrle5.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1694890604/xAcademy/Img-Hero/hero-3_xil6xu.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1694890623/xAcademy/Img-Hero/hero-4_rlh6tf.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1694890602/xAcademy/Img-Hero/Hero-5_asgxdb.png",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1694890600/xAcademy/Img-Hero/Hero-6_wrcjp2.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1694891485/xAcademy/Img-Hero/Hero-7_ohwiay.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1694890601/xAcademy/Img-Hero/Hero-8_nqzqhg.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1694890618/xAcademy/Img-Hero/Hero-9_lppewk.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1694891570/xAcademy/Img-Hero/Hero-10_wnilux.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1694890605/xAcademy/Img-Hero/Hero-11_bc06wr.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1694890604/xAcademy/Img-Hero/Hero-12_svmrf3.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1694891670/xAcademy/Img-Hero/Hero-13_i2mhtg.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1694890602/xAcademy/Img-Hero/Hero-14_lwcc5x.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1694890603/xAcademy/Img-Hero/Hero-15_rnyai8.png",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1694890603/xAcademy/Img-Hero/Hero-16_ldos1w.jpg",
    "https://res.cloudinary.com/carina-bosio/image/upload/v1694890603/xAcademy/Img-Hero/Hero-17_d8nif3.jpg",

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
