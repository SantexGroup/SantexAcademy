import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoTareasComponent } from './components/listado-tareas/listado-tareas.component';
import { DetalleTareaComponent } from './components/detalle-tarea/detalle-tarea.component';
import { CoreModule } from 'src/app/core/core.module';
import { ListadoPremiosComponent } from './components/listado-premios/listado-premios.component';



@NgModule({
  declarations: [
    ListadoTareasComponent,
    DetalleTareaComponent,
    ListadoPremiosComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports:[
    ListadoTareasComponent,
    DetalleTareaComponent,
    ListadoPremiosComponent
  ]
})
export class SharedModule { }
