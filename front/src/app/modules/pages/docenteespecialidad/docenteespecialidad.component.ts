import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'
import { DocenteService } from 'src/app/modules/docentes/services/docente.service';
import { Especialidad } from '../../especialidades/interfaces/especialidad';
import { EspecialidadService } from '../../especialidades/services/especialidad.service';
import { Docente } from '../../docentes/interfaces/docente';
import { TipoDeUsuario, User } from '../../users/interface/user.interface';

@Component({
  selector: 'app-docenteespecialidad',
  templateUrl: './docenteespecialidad.component.html',
  styleUrls: ['./docenteespecialidad.component.css']
})
export class DocenteespecialidadComponent implements OnInit {
  form:FormGroup;
  
  especialidadNva: Especialidad = {
    nombre: 'Vacio',
  };

  tipoUsuarioNvo: TipoDeUsuario = {
    nombre: 'Vacio',
    descripcion: 'Vacio'
  };
  
  userNvo: User = {
    username: '',
    password: '',
    apellido: '',
    nombre: '',
    email: '',
    estado: 'A',
    confirmPassword: '',
    idtipodeusuario: 0,
    activoactualmente: true,
    createdAt: new Date,
    updatedAt: new Date,
    TipoDeUsuario: this.tipoUsuarioNvo,
    verificationCode: false,
    codeRegister: ''
  }

  docente: Docente = {
    UserDocente: this.userNvo,
    estado: 'A',
    habilitado: true,
    Especialidad: this.especialidadNva,
  }

  especialidadSeleccionada: number | undefined = undefined;
  especialidades: Especialidad[] = [];

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private especialidadService: EspecialidadService,
    private docenteService: DocenteService)  
    { 
      this.form = this.formBuilder.group({
        especialidadType: ['Seleccione', [Validators.required, this.validateEspecialidadType]]
      });
      
    }

    validateEspecialidadType(control: any) {
      if (control.value === 'Seleccione') {
        return { invalidespecialidadType: false };
      }
      return null;
    }

    ngOnInit(): void {
      this.especialidadService.getEspecialidades().subscribe((data: Especialidad[]) => {
        this.especialidades = data;
        console.log(this.especialidades);
      });
    
      this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.docenteService.getDocentePorId(id))
        )
        .subscribe((docente) => {
          this.docente = docente;
          console.log("id especialidad:" + docente.idespecialidad)
          this.especialidadSeleccionada = docente.idespecialidad !== 0 ? docente.idespecialidad : undefined;
         
        });
    }
    
  onEspecialidadChange(event: any): void {
    this.especialidadSeleccionada = event.target.value; 
  }

  onEnviar(event: Event, docente: Docente): void {
    event.preventDefault();
  
    const especialidadType = this.form.get('especialidadType')?.value;
  
    if (this.form.valid) {
      if (this.especialidadSeleccionada !== 0) {
        this.docente.idespecialidad = this.especialidadSeleccionada;
        if (this.docente.id) {
          // Editar docente existente
          this.docenteService.editDocente(this.docente)
            .subscribe(
              docente => {
                console.log('Docente editado:', docente);
                this.router.navigate(['/users/index']);
              },
              error => {
                console.error('Error al editar docente:', error);
              }
            );
        }     
      } else {
        this.especialidadSeleccionada = undefined; // Establecer como undefined si es "Seleccione"
      } 
    } else {
      this.form.markAllAsTouched();
      console.error('Formulario inválido. Por favor, complete todos los campos correctamente.');
    }
  }
  

}
