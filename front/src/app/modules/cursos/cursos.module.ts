import { NgModule } from '@angular/core';
import { CommonModule, FormStyle } from '@angular/common';
import { AllCursosComponent } from './pages/all-cursos/all-cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllCursosComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    FormsModule
  ]
})
export class CursosModule { }
