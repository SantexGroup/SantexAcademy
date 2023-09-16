import { Component, OnInit } from '@angular/core';

// import { Curso } from '../../../models/curso.interface';
import { CursosService } from '../../cursos/services/cursos.service';
import { Curso } from '../../cursos/interface/cursos.interface';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  cursos: Curso[] = [];

  constructor(private cursosService: CursosService) { }

  ngOnInit(): void {
    this.cursosService.getCursos()
      .subscribe( cursos => this.cursos = cursos )
  }

}
