import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuienessomosComponent } from './quienessomos/quienessomos.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CursoComponent } from './curso/curso.component';
import { IntegranteComponent } from './integrante/integrante.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    QuienessomosComponent,
    CatalogoComponent,
    CursoComponent,
    IntegranteComponent,
    Pagina404Component
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    QuienessomosComponent, //Exporto el componente de quienes somos para poder usarlo desde otro lado
    CatalogoComponent,
    CursoComponent,
    IntegranteComponent,
    Pagina404Component
  ]
})
export class PagesModule { }
