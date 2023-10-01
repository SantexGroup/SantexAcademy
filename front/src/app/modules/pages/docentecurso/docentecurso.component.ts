import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Docenteporcurso } from './interfaces/docenteporcurso';
import { Curso } from '../../cursos/interface/cursos.interface'
import { Docente } from '../../docentes/interfaces/docente';
import { Nivel } from 'src/app/models/nivel.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { DocenteporcursoService } from './services/docenteporcurso.service';
import { DocenteService } from '../../docentes/services/docente.service';
import { switchMap } from 'rxjs';
import { CursosService } from '../../cursos/services/cursos.service';

@Component({
  selector: 'app-docentecurso',
  templateUrl: './docentecurso.component.html',
  styleUrls: ['./docentecurso.component.css']
})
export class DocentecursoComponent implements OnInit {
  form:FormGroup;
  
  nivelNvo: Nivel = {
    nombre: 'Vacio',
    descripcion: 'Vacio',
  };

  cursoNvo: Curso = {
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

  docenteporcurso: Docenteporcurso = {
    iddocente: 0,
    estado: 'A',
    habilitado: true,
    idcurso: 0,
  }

  docenteSeleccionado: number | undefined = undefined;
  docentes: Docente[] = [];
  docente: Docente | undefined
  notificationMessage: string | undefined;

  
  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private docenteService: DocenteService,
    private docenteporcursoService: DocenteporcursoService,
    private cursoService: CursosService)  
    { 
      this.form = this.formBuilder.group({
        docenteType: ['Seleccione', [Validators.required, this.validateDocenteType]]
      });
      
    }

    validateDocenteType(control: any) {
      if (control.value === 'Seleccione') {
        return { invaliddocenteType: false };
      }
      return null;
    }

    ngOnInit(): void {
      this.docenteService.getDocentes().subscribe((data: Docente[]) => {
        this.docentes = data;
        console.log(this.docentes);
      });
    
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.docenteporcursoService.getDocentePorCursoPorId(id))
        )
        .subscribe((docenteporcurso) => {
          this.docenteporcurso = docenteporcurso;
          console.log("id docente:" + docenteporcurso.idcurso)
          this.docenteSeleccionado = docenteporcurso.iddocente !== 0 ? docenteporcurso.iddocente : undefined;
         
        });
    }
    
  onDocenteChange(event: any): void {
    this.docenteSeleccionado = event.target.value; 
  }

  onEnviar(event: Event, docente: Docente): void {
    event.preventDefault();
  
    const docenteType = this.form.get('docenteType')?.value;
  
    if (this.form.valid) {
      if (this.docenteSeleccionado !== 0) {
        this.docenteporcurso.iddocente = this.docenteSeleccionado;
        if (this.docenteporcurso.id) {
            // Editar docente por curso existente
              this.docenteporcursoService.editDocentePorCurso(this.docenteporcurso)
                .subscribe(
                  docente => {
                    console.log('Docente por curso editado:', docente);
                    this.notificationMessage = 'Operación exitosa: Datos guardados correctamente';
                  },
                  error => {
                    console.error('Error al asignar un docente a un curso:', error);
                  }
                );
            }     
          } else {
            this.docenteSeleccionado = undefined; 
          } 
          
    } else {
      this.form.markAllAsTouched();
      console.error('Formulario inválido. Por favor, complete todos los campos correctamente.');
    }
  }
  

}
