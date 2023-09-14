import { Component, OnInit } from '@angular/core';
import { Curso } from '../../interface/cursos.interface';
import { CursosService } from '../../services/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Nivel } from 'src/app/models/nivel.interface';
import { NivelsService } from '../../services/nivelsservice';

@Component({
  selector: 'app-create-curso',
  templateUrl: './create-curso.component.html',
  styleUrls: ['./create-curso.component.css'],
})
export class CreateCursoComponent implements OnInit {
  nivelNvo: Nivel = {
    nombre: 'Vacio',
    descripcion: 'Vacio',
  };

  curso: Curso = {
    id: 0,
    nombre: '',
    descripcion: '',
    imagen: '',
    duracion: 0,
    capacidad: 0,
    idnivel: 0,
    requisitos: '',
    habilitado: true,
<<<<<<< HEAD
    fechainicio: new Date(),
    fechafin: new Date(),
    idusuarioalta: 0,
    idusuariomodificacion: 0,
    estado: 'A',
    createdAt: new Date(),
    updatedAt: new Date(),
    nivel: this.nivelNvo,
  };
=======
    fechaInicio: new Date,
    fechafin: null,
    idusuarioalta: null,
    estado: true,
    idusuariomodificacion: null,
  }
>>>>>>> juanjoDiaz

  nivel: Nivel = {
    id: 0,
    nombre: '',
    descripcion: '',
  };

  constructor(
    private cursosService: CursosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private nivelsService: NivelsService
  ) {}

  niveles: Nivel[] = [];
  nivelSeleccionado: number | undefined = undefined;

  ngOnInit(): void {
    //Obtengo los niveles
    this.nivelsService.getNiveles().subscribe((data: Nivel[]) => {
      this.niveles = data;
      this.nivelSeleccionado = undefined;
      console.log(this.niveles);
    });

    if (!this.router.url.includes('edit')) {
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.cursosService.getCursoPorId(id)))
      .subscribe((curso) => (this.curso = curso));
  }

  // Método para manejar la selección de nivel
  onNivelChange(event: any): void {
    this.nivelSeleccionado = event.target.value; // Almacena el nivel seleccionado
  }

  guardar() {
    if (this.curso.nombre.trim().length === 0) {
      return;
    }

    if (this.nivelSeleccionado !== undefined) {
      if (this.curso.id) {
        // edit
        this.curso.idnivel = this.nivelSeleccionado;
        this.cursosService.editCurso(this.curso).subscribe((curso) => {
          console.log('edit', curso);
          this.router.navigate(['/cursos/index']);
        });
      } else {
        // add
        this.cursosService.addCurso(this.curso).subscribe((curso) => {
          console.log('add :', curso);
          this.router.navigate(['/cursos/index']);
        });
      }
    } else {
      console.error('El nivel seleccionado es undefined.');
    }
  }
}
