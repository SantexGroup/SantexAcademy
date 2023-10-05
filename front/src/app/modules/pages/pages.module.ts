import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CursoComponent } from './curso/curso.component';
import { IntegranteComponent } from './integrante/integrante.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdminComponent } from './admin/admin.component';//Error encontrado y solucionado por Franco
import { EstadoUsuarioDirective } from 'src/app/directivas/estado-usuario.directive';
import { EstadoCursoDirective } from 'src/app/directivas/estado-curso.directive';
import { ActivardesactivarcursoDirective } from 'src/app/directivas/activardesactivarcurso.directive';
import { MisCursosComponent } from './mis-cursos/mis-cursos.component';
import { AulaVirtualComponent } from './aula-virtual/aula-virtual.component';
import { HabilitarmatriculaDirective } from 'src/app/directivas/habilitarmatricula.directive';
import { PerfilAlumnoComponent} from './perfil-alumno/perfil-alumno.component';
import { PerfilAlumnoEditarComponent } from './perfil-alumno-editar/perfil-alumno-editar.component';
import { PerfilDocenteComponent } from './perfil-docente/perfil-docente.component';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';//Duplicado arriba
import { HabilitardocenteDirective } from 'src/app/directivas/habilitardocente.directive';
import { DocenteespecialidadComponent } from './docenteespecialidad/docenteespecialidad.component';
import { DocentecursoComponent } from './docentecurso/docentecurso.component';
import { AlumnonotaComponent } from './alumnonota/alumnonota.component';
import { AlumnoasistenciaComponent } from './alumnoasistencia/alumnoasistencia.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    QuienessomosComponent,
    CatalogoComponent,
    CursoComponent,
    IntegranteComponent,
    AdminComponent,
    EstadoUsuarioDirective,
    EstadoCursoDirective,
    ActivardesactivarcursoDirective,
    MisCursosComponent,
    AulaVirtualComponent,
    HabilitarmatriculaDirective,
    PerfilAlumnoComponent,
    PerfilAlumnoEditarComponent,
    PerfilDocenteComponent,
    HabilitardocenteDirective,
    DocenteespecialidadComponent,
    DocentecursoComponent,
    AlumnonotaComponent,
    AlumnoasistenciaComponent,
    NotificationComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    QuienessomosComponent, //Exporto el componente de quienes somos para poder usarlo desde otro lado
    CatalogoComponent,
    CursoComponent,
    IntegranteComponent,
    AdminComponent,
    PerfilAlumnoComponent,
    PerfilAlumnoEditarComponent,
    DocenteespecialidadComponent,
    DocentecursoComponent,
    AlumnoasistenciaComponent,
    NotificationComponent
  ]
})
export class PagesModule { }

