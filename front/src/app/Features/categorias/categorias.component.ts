import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from 'src/app/core/services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  idCategory: string = '';
  

  constructor(private activatedroute: ActivatedRoute, private router: Router, private service: CategoriasService) { }

  ngOnInit(): void { 

    this.activatedroute.params.subscribe(params => {
      this.idCategory = params['id'];
      this.service.getByCategory(this.idCategory).subscribe(response => {
        console.log(response);
      })
    })
  }
}
  