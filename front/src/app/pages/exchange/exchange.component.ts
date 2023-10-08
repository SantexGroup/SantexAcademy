import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.css']
})
export class ExchangeComponent {
  productos = [
    { nombre: 'Vaso Termico', puntos: 10, imagen: '../../../../../assets/products/vaso-termico.png' },
    { nombre: 'Mochila', puntos: 10, imagen: '../../../../../assets/products/mochila.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
    { nombre: 'Producto 3', puntos: 10, imagen: '../../../../../assets/imgs/patron1.png' },
  ];

  productosPorPaginaLargeScreen = 10;
  productosPorPaginaMediumScreen = 8;
  productosPorPaginaSmallScreen = 6;

  paginaActual = 1;

  // Variable para almacenar el tamaño de pantalla actual
  screenSize: string = '';

  ngOnInit() {
    this.detectScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.detectScreenSize();
  }

  detectScreenSize(): void {
    if (window.innerWidth >= 1024) {
      this.screenSize = 'large-screen';
    } else if (window.innerWidth >= 768) {
      this.screenSize = 'medium-screen';
    } else {
      this.screenSize = 'small-screen';
    }
  }

  get productosVisibles() {
    let cantidadPorPagina = 0;

    if (this.screenSize === 'large-screen') {
      cantidadPorPagina = this.productosPorPaginaLargeScreen;
    } else if (this.screenSize === 'medium-screen') {
      cantidadPorPagina = this.productosPorPaginaMediumScreen;
    } else {
      cantidadPorPagina = this.productosPorPaginaSmallScreen;
    }

    const inicio = (this.paginaActual - 1) * cantidadPorPagina;
    const fin = inicio + cantidadPorPagina;
    return this.productos.slice(inicio, fin);
  }

  get numerosDePagina() {
    let cantidadPorPagina = 0;

    if (this.screenSize === 'large-screen') {
      cantidadPorPagina = this.productosPorPaginaLargeScreen;
    } else if (this.screenSize === 'medium-screen') {
      cantidadPorPagina = this.productosPorPaginaMediumScreen;
    } else {
      cantidadPorPagina = this.productosPorPaginaSmallScreen;
    }

    const totalTarjetas = this.productos.length;
    const totalPaginas = Math.ceil(totalTarjetas / cantidadPorPagina);
    return Array.from({ length: totalPaginas }, (_, index) => index + 1);
  }







}
