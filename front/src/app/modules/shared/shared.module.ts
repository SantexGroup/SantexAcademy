import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoTareasComponent } from './components/listado-tareas/listado-tareas.component';



@NgModule({
  declarations: [
    ListadoTareasComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ListadoTareasComponent
  ]
})
export class SharedModule { }
