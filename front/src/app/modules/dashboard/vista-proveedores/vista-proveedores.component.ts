import { Component, OnInit } from '@angular/core';

export interface Proveedor {
  nombre: string;
  direccion: string;
  productos: Producto[];
}

export interface Producto {
  nombre: string;
  precio: number;
  descripcion: string;
}
@Component({
  selector: 'app-vista-proveedores',
  templateUrl: './vista-proveedores.component.html',
  styleUrls: ['./vista-proveedores.component.css']
})
export class VistaProveedoresComponent implements OnInit {

// Creamos una lista de productos como ejemplo
productList: Producto[] = [
  {nombre: 'Mesa', precio: 60, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nostrum commodi aperiam, ipsa incidunt eum quibusdam recusandae temporibus ipsum accusantium? Explicabo minus reprehenderit temporibus adipisci odio beatae. Eaque, impedit libero.'},
  {nombre: 'Silla', precio: 80, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nostrum commodi aperiam, ipsa incidunt eum quibusdam recusandae temporibus ipsum accusantium? Explicabo minus reprehenderit temporibus adip'},
];
productList2: Producto[] = [
  {nombre: 'Mesa', precio: 60, descripcion:'nada por el momento'},
  {nombre: 'Silla', precio: 80, descripcion:'Especial epocas festivas'},
  {nombre: 'Mesa Algarrobo', precio: 60, descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio nostrum commodi aperiam, ipsa incidunt eum quibusdam recusandae temporibus ipsum accusantium? Explicabo minus reprehenderit temporibus adipisci odio beatae. Eaque, impedit libero.'},
];

// Creamos una lista de proveedores
proveedoresList: Proveedor[] = [
  {nombre: 'Jose', direccion: 'Alto Palpala - San Salvador de Jujuy (Moreno) - Palpalá ( Avda. Libertad - 25 de Mayo) ', productos: this.productList},
  {nombre: 'Jose2', direccion: 'Alto Palpala2', productos: this.productList2},
  {nombre: 'Jose', direccion: 'Alto Palpala', productos: this.productList},
  {nombre: 'Jose2', direccion: 'Alto Palpala2', productos: this.productList2},
  {nombre: 'Jose', direccion: 'Alto Palpala', productos: this.productList},
  {nombre: 'Jose2', direccion: 'Alto Palpala2', productos: this.productList2},
  {nombre: 'Jose', direccion: 'Alto Palpala', productos: this.productList},
  {nombre: 'Jose2', direccion: 'Alto Palpala2', productos: this.productList2},
  {nombre: 'Jose', direccion: 'Alto Palpala', productos: this.productList},
  {nombre: 'Jose2', direccion: 'Alto Palpala2', productos: this.productList2}
];

// Declaramos la propiedad proveedores
proveedores: Proveedor[] = [];

mostrarProductos = false;
productosProveedor: Producto[] = [];
nombreProveedor = '';

constructor() {
  this.proveedores = this.proveedoresList;
}


  ngOnInit(): void {
  }

  verProductos(proveedor: Proveedor) {
    // Actualizar el nombre de los productos y mostrar la sección de productos
    this.nombreProveedor = proveedor.nombre;
    this.productosProveedor = proveedor.productos;
    this.mostrarProductos = true;
  }
  ocultarProductos() {
    this.mostrarProductos = false;
  }
}
