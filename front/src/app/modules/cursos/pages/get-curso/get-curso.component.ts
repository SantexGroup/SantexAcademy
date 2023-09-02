import { Component, OnInit } from '@angular/core';
import { Curso } from '../../interface/cursos.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from '../../services/cursos.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-get-curso',
  templateUrl: './get-curso.component.html',
  styleUrls: ['./get-curso.component.css']
})
export class GetCursoComponent implements OnInit {

  curso!: Curso;

  constructor(private activatedRouter: ActivatedRoute,
              private cursosService: CursosService,
              private router: Router) { }

  ngOnInit(): void {

    this.activatedRouter.params
      .pipe(
        switchMap( ({id}) => this.cursosService.getCursoPorId(id))
      )
      .subscribe( curso => this.curso = curso )

  }

  deleteCurso(){
    this.cursosService.deleteCurso( this.curso.id! )
      .subscribe(resp => {
        this.router.navigate(['/cursos/index'])
      })
  }
}
