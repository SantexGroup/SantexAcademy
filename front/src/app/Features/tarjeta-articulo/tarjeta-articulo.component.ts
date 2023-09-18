import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerArtGenService } from 'src/app/core/services/ver-art-gen.service';

@Component({
  selector: 'app-tarjeta-articulo',
  templateUrl: './tarjeta-articulo.component.html',
  styleUrls: ['./tarjeta-articulo.component.css']
})
export class TarjetaArticuloComponent implements OnInit {

  listArticulos: any = [];
  
  constructor(private service: VerArtGenService) { }

  ngOnInit(): void {
    this.service.getProduct().subscribe(productos => {
      console.log(productos);
      // this.listArticulos = productos;
      })
    
  }
}
