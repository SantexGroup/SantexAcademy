import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tarea } from 'src/app/core/interfaces/tarea';
import { TareaService } from 'src/app/core/services/tarea.service';
import { DetalleTareaComponent } from '../detalle-tarea/detalle-tarea.component';
import { ResumenVoluntario } from 'src/app/core/interfaces/resumenVoluntario';
import { VoluntarioService } from 'src/app/core/services/voluntario.service';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent implements OnInit {
  
  @Input() esVoluntario:boolean = false;
  datosVoluntario: ResumenVoluntario | null = null;
  
  @Output() tareaInscripcion = new EventEmitter<Tarea>();
  @Output() tareaDesinscripcion = new EventEmitter<Tarea>();
  
  listadoTareas:Tarea[] = [];
  
  constructor(private tareaService:TareaService, private dialog:MatDialog, private voluntarioService:VoluntarioService) { }
  
  ngOnInit(): void {

    if(this.esVoluntario){
      this.voluntarioService.getDatosVoluntario.subscribe({
        next:(res)=>{
          this.datosVoluntario = res;
          this.mostrarTareas();
        }
      });
    }
    else{

      this.mostrarTareas();
    }

  }
  
  

  mostrarTareas():void{
    this.tareaService.getTareas().subscribe({
      next:(res)=>{
        this.listadoTareas = res;
      },
      error:()=>{
      }
    });
  }

  mostrarDetalles(tarea:Tarea):void{
    this.dialog.open(DetalleTareaComponent,{data:tarea});
  }

  inscribirVoluntario(tarea:Tarea):void{
    this.tareaInscripcion.emit(tarea);
  }

  verificarInscripcion(tarea:Tarea):boolean{
    let resultado = false;
    if(this.datosVoluntario){

      resultado = this.datosVoluntario.tareas?.some(t=> t.id === tarea.id)!;
    }
    return resultado;

  }

  verificarAsistencia(tarea:Tarea):boolean{
    if(this.datosVoluntario){

      const resultado = this.datosVoluntario.tareas?.some(t=> t.id === tarea.id)!;

      if(resultado){
        const index = this.datosVoluntario.tareas.findIndex(tareaVoluntario => tareaVoluntario.id === tarea.id);
        if(this.datosVoluntario.tareas[index].tareasVoluntario?.asistio){
          return true;
        }
      }
    }
    return false;

  }

  desinscribirVoluntario(tarea:Tarea):void{
    this.tareaDesinscripcion.emit(tarea);
  }
  
}
