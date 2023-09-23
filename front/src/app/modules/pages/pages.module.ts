import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    HabilitarmatriculaDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    QuienessomosComponent, //Exporto el componente de quienes somos para poder usarlo desde otro lado
    CatalogoComponent,
    CursoComponent,
    IntegranteComponent,
    AdminComponent
  ]
})
export class PagesModule { }
