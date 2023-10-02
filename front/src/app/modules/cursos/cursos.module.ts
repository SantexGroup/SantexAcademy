import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AllCursosComponent } from './pages/all-cursos/all-cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CreateCursoComponent } from './pages/create-curso/create-curso.component';
import { GetCursoComponent } from './pages/get-curso/get-curso.component';
import { DateFormatPipe } from 'src/app/pipes/dateformat';

@NgModule({
  declarations: [
    AllCursosComponent,
    CreateCursoComponent,
    GetCursoComponent,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule,
    
  ]
})
export class CursosModule { }
