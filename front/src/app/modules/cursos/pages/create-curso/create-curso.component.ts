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
    fechainicio: new Date(),
    fechafin: new Date(),
    idusuarioalta: 0,
    idusuariomodificacion: 0,
    estado: 'A',
    createdAt: new Date(),
    updatedAt: new Date(),
    Nivel: this.nivelNvo,
  };

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
  formattedStartDate: string | undefined;

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
    .subscribe((curso) => {
      this.curso = curso;
      this.nivelSeleccionado = curso.idnivel;  
    });  
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
        this.curso.idnivel = this.nivelSeleccionado;
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


/* 
Melisa:
Dejo comentado esto, porque se resuelve el tema de fechas dandole formato 
[ngModel]="curso.fechainicio | date:'yyyy-MM-dd'"
(ngModelChange)="curso.fechainicio=$event"
desde el HTML:

 if (this.curso.fechainicio instanceof Date && !isNaN(this.curso.fechainicio.getTime())) {
        this.formattedStartDate = this.formatDate(this.curso.fechainicio);
      } else {
        // No mostrar nada
        this.formattedStartDate = ''; 
      }

       if (this.curso.fechafin instanceof Date && !isNaN(this.curso.fechafin.getTime())) {
        this.formattedStartDate = this.formatDate(this.curso.fechafin);
      } else {
        // No mostrar nada
        this.formattedStartDate = ''; 
      }

   // Función para formatear la fecha como "yyyy-MM-dd"
  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    return date.toISOString().split('T')[0]
  }
*/