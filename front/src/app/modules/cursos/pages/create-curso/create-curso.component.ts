import { Component, OnInit } from '@angular/core';
import { Curso } from '../../interface/cursos.interface';
import { CursosService } from '../../services/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrls: ['./create-curso.component.css']
})
export class CreateCursoComponent implements OnInit {

  curso: Curso = {
    nombre: '',
    descripcion: '',
    imagen: '',
    duracion: 0,
    capacidad: 0,
    idnivel: null,
    requisitos:  '',
    habilitado: true,
    fechaInicio: new Date,
    fechafin: null,
    idusuarioalta: null,
    estado: true,
    idusuariomodificacion: null,
  }

  constructor( private cursosService: CursosService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    if( !this.router.url.includes('edit') ) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.cursosService.getCursoPorId( id ))
      )
      .subscribe( curso => this.curso = curso )
  }

  guardar() {

    if( this.curso.nombre.trim().length === 0 ){
      return;
    }


    if ( this.curso.id ){
      // edit
      this.cursosService.editCurso( this.curso )
        .subscribe( curso => {
          console.log('edit', curso)
          this.router.navigate(['/cursos/index' ])
         })
    }else{
      // add
      this.cursosService.addCurso(this.curso)
        .subscribe( curso => {
          console.log('add :', curso)
          this.router.navigate(['/cursos/index' ])
        })
    }
   
  }

}
