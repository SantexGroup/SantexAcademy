import { Component, OnInit } from '@angular/core';
import { BarraService } from 'src/app/core/services/barra.service';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  listCategorias: any[]=[]

  constructor (private service: BarraService) { }

  ngOnInit(): void {
    this.service.getCategories().subscribe(categorias => {
    console.log(categorias)
    this.listCategorias = categorias
    })
  }

}
