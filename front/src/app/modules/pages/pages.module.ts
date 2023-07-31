import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from 'src/app/components/commons/curso/curso.component';
import { PublicacionComponent } from 'src/app/components/commons/publicacion/publicacion.component';



@NgModule({
  declarations: [
    HomeComponent,
    CursosComponent,
    CursoComponent,
    PublicacionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    CursosComponent
  ]
})
export class PagesModule { }
