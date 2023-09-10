import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoTareasComponent } from './components/listado-tareas/listado-tareas.component';
import { DetalleTareaComponent } from './components/detalle-tarea/detalle-tarea.component';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    ListadoTareasComponent,
    DetalleTareaComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports:[
    ListadoTareasComponent,
    DetalleTareaComponent 
  ]
})
export class SharedModule { }
