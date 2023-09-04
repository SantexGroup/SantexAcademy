import { Component, OnInit } from '@angular/core';

import { Curso } from '../../interface/cursos.interface';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-all-cursos',
  templateUrl: './all-cursos.component.html',
  styleUrls: ['./all-cursos.component.css']
})
export class AllCursosComponent implements OnInit {

  cursos: Curso[] = [];

  constructor( private cursosService: CursosService ) { }

  ngOnInit(): void {
    this.cursosService.getCursos()
      .subscribe( cursos => this.cursos = cursos )
  }

}
