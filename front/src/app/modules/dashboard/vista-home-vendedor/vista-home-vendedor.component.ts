import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

export interface Usuario {
  nombre: string;
  direccion: string;
  pedidos: Pedido[];
}
export interface Pedido{
  nombreC: string;
  fechaInicio: string;
  fechaFin: string;
  unidades: number;
}
@Component({
  selector: 'app-vista-home-vendedor',
  templateUrl: './vista-home-vendedor.component.html',
  styleUrls: ['./vista-home-vendedor.component.css']
})
export class VistaHomeVendedorComponent implements OnInit {

  pedidoList: Pedido[] = [];
  pedidoList1: Pedido[] = [
    {nombreC: 'Amelia', fechaInicio: '22/03/23', fechaFin: '22/04/23', unidades: 20},
    {nombreC: 'Amelia1', fechaInicio: '22/03/23', fechaFin: '22/04/23', unidades: 40},
    {nombreC: 'Amelia2', fechaInicio: '22/03/23', fechaFin: '22/04/23', unidades: 20},
    {nombreC: 'Amelia3', fechaInicio: '22/03/23', fechaFin: '22/04/23', unidades: 30},
    {nombreC: 'Amelia4', fechaInicio: '22/03/23', fechaFin: '22/04/23', unidades: 20},
    {nombreC: 'Amelia5', fechaInicio: '22/03/23', fechaFin: '22/04/23', unidades: 10},
    {nombreC: 'Amelia6', fechaInicio: '22/03/23', fechaFin: '22/04/23', unidades: 20},
    {nombreC: 'Amelia7', fechaInicio: '22/03/23', fechaFin: '22/04/23', unidades: 10},
    {nombreC: 'Amelia7', fechaInicio: '22/03/23', fechaFin: '22/04/23', unidades: 10}
  ];
  
  usuarioList: Usuario = 
    {nombre: 'Juan Alberto', direccion:'Avnda Vespucio - Jujuy', pedidos: this.pedidoList1}
  ;

// Variable sujeta al usuario
  esVendedor: boolean = true;
  greetingMessage: string = '';
  user: any = localStorage.getItem("user")

  constructor(private usersev:UserService, private router: Router) {
    if(this.user){
      this.user=JSON.parse(this.user)
    }
   }

  // this.esVendedor = this.authService.esVendedor();
  ngOnInit() {
    this.setGreetingMessage();
  }

  setGreetingMessage() {
    const currentHour = new Date().getHours();

    if (currentHour >= 6 && currentHour < 12) {
      this.greetingMessage = 'Buenos días';
    } else if (currentHour >= 12 && currentHour < 18) {
      this.greetingMessage = 'Buenas tardes';
    } else {
      this.greetingMessage = 'Buenas noches';
    }
  }

  // Simula  eliminar un pedido  debemo cambiarlo por aprobado o rechazado
  tomarPedido(index: number) {
    
    if (index >= 0 && index < this.pedidoList1.length) {
      
      this.pedidoList1.splice(index, 1);
    }
  }
}
