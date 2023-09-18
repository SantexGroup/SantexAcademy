import { Component, OnInit } from '@angular/core';
import { vistaArtIndServ } from 'src/app/core/services/vista-art-ind-serv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vista-articulo-ind',
  templateUrl: './vista-articulo-ind.component.html',
  styleUrls: ['./vista-articulo-ind.component.css']
})
export class VistaArtIndComponent implements OnInit {

  id: number = 1;
  respuesta: any = [];
  diasElec: string = '';
  

  constructor(private service: vistaArtIndServ, private router: Router) { }

  ngOnInit(): void {
    console.log(this.id);
    this.datosProd(this.id);
  }

  //traer datos
  datosProd(id: number) {
    this.service.datosProdServ(this.id).subscribe(res => {
      this.respuesta = res;
      console.log(this.respuesta.usuario)
      console.log(this.respuesta.articulos)
      console.log(this.respuesta.tipo)
    })
  }

  //mensaje de alerta
  mensajeDias() {
    alert("Tanto para envío como para retiro tendrá su producto en un plazo de 2 días");
    console.log(this.diasElec)
  }

  //confirmación
  botAlq() {
    if(confirm("¿Desea pasar a la vista de transacción?")) { 
      
      // localStorage.setItem( 'infoProd', JSON.stringify(
      //   this.respuesta.usuario, 
      //   this.respuesta.articulos, 
      //   this.respuesta.tipo));
      // this.router.navigateByUrl('/'); //acá iría la dirección de la vista de transacción
    }
  }  
}