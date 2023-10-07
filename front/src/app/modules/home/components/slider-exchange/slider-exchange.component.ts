import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-exchange',
  templateUrl: './slider-exchange.component.html',
  styleUrls: ['./slider-exchange.component.css']
})
export class SliderExchangeComponent {
  isModalOpen = false;

  products = [
    { name: 'Vaso Térmico', points: '10', imagePath: '../../assets/products/vaso-termico.png' },
    { name: 'Mochila', points: '10', imagePath: '../../assets/products/mochila.png' },
    { name: 'Producto 3', points: '10', imagePath: '../../../../../assets/imgs/patron1.png' },
    { name: 'Producto 4', points: '10', imagePath: '../../../../../assets/imgs/patron1.png' },
    { name: 'Producto 5', points: '10', imagePath: '../../../../../assets/imgs/patron1.png' },
    { name: 'Producto 6', points: '10', imagePath: '../../../../../assets/imgs/patron1.png' },
    { name: 'Producto 7', points: '10', imagePath: '../../../../../assets/imgs/patron1.png' },
    { name: 'Producto 8', points: '10', imagePath: '../../../../../assets/imgs/patron1.png' },
    { name: 'Producto 9', points: '10', imagePath: '../../../../../assets/imgs/patron1.png' },
    { name: 'Producto 10', points: '10', imagePath: '../../../../../assets/imgs/patron1.png' },
    // Agrega más productos aquí
  ];

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }
}
