import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';


export interface Producto {
  nombre: string;
  precio: number;
  descripcion: string;
}
export interface Alquiler {
  nombre: string;
  precio: number;
  cantidad: number;
  aceptado: string;
}
@Component({
  selector: 'app-vista-usuario-perfil',
  templateUrl: './vista-usuario-perfil.component.html',
  styleUrls: ['./vista-usuario-perfil.component.css']
})
export class VistaUsuarioPerfilComponent implements OnInit {

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
  alquileresList: Alquiler[] = [
    {nombre: 'Mesa22', precio: 200, cantidad: 50, aceptado:"Si"},
    {nombre: 'silla22', precio: 150, cantidad: 60, aceptado:"No"},
    {nombre: 'Mesa22', precio: 200, cantidad: 50, aceptado:"Si"},
    {nombre: 'silla22', precio: 150, cantidad: 60, aceptado:"No"},
    {nombre: 'Mesa22', precio: 200, cantidad: 50, aceptado:"No"},
    {nombre: 'silla22', precio: 150, cantidad: 60, aceptado:"No"},
  ];
  alquileresList2: Alquiler[] = [
    {nombre: 'Mesa23', precio: 200, cantidad: 50, aceptado:"No"},
    {nombre: 'silla23', precio: 150, cantidad: 60, aceptado:"Si"},
  ]

  //Creamos un Usuario
  perfilUsuario!:User 

  constructor(private userServ: UserService, ) { 
    
  }

  ngOnInit(): void {
    this.perfilUsuario = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null;
  }
  removeProducto(index: number){
      // Función para eliminar un producto del carrousel
    this.productList2.splice(index, 1);

  }
  
}
