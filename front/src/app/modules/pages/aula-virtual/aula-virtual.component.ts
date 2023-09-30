import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../auth/services/auth.service';
import { CursosService } from '../../cursos/services/cursos.service';
import { Curso } from '../../cursos/interface/cursos.interface';

@Component({
  selector: 'app-aula-virtual',
  templateUrl: './aula-virtual.component.html',
  styleUrls: ['./aula-virtual.component.css']
})
export class AulaVirtualComponent implements OnInit {
  nombreCurso: string | undefined;
  imagenCurso: string | undefined;
  tipoDeUsuario: string | undefined;

  constructor(private route: ActivatedRoute,
             private authService: AuthService,
             private cursoService: CursosService,
             ) { }

  ngOnInit(): void {
    // Obtengo datos del curso pasados desde MisCursosComponent
    // const state = history.state;
    // this.nombreCurso = localStorage.getItem('nombreCurso') ?? undefined;
    // this.imagenCurso = localStorage.getItem('imagenCurso') ?? undefined;
    // console.log('Nombre del curso obtenido desde localStorage:', this.nombreCurso);
    // console.log('Imagen del curso obtenida desde localStorage:', this.imagenCurso);

    // Obtengo tipo de usuario desde AuthService
    this.tipoDeUsuario = this.authService.user?.tipoDeUsuario;

    // Obtener el id del curso desde la ruta
    let curso: Curso; // Declaro como variable a curso 
    this.route.params.subscribe((params) => {
      const courseId = params['id'];
    
      // Utilizar el servicio para obtener los datos del curso
      this.cursoService.getCursoPorId(courseId).subscribe((curso) => {
          this.nombreCurso = curso.nombre;
          this.imagenCurso = curso.imagen;
      });
    });
  }

  search(){}



}
