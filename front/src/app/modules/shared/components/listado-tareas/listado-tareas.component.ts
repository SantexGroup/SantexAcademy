import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tarea } from 'src/app/core/interfaces/tarea';
import { TareaService } from 'src/app/core/services/tarea.service';
import { DetalleTareaComponent } from '../detalle-tarea/detalle-tarea.component';
import { Voluntario } from 'src/app/core/interfaces/voluntario';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent implements OnInit, OnChanges {
  
  @Input() esVoluntario:boolean = false;
  @Input() datosVoluntario: Voluntario | null = null;
  
  @Output() tareaInscripcion = new EventEmitter<Tarea>();
  
  listadoTareas:Tarea[] = [];
  
  constructor(private tareaService:TareaService, private dialog:MatDialog) { }
  
  ngOnInit(): void {
    this.mostrarTareas();
  }
  
  ngOnChanges(changes:SimpleChanges):void{
    
    if(this.esVoluntario){

      if('datosVoluntario' in changes){
        
        if(!changes['datosVoluntario'].firstChange){
  
          this.mostrarTareas();
        }
  
      }

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
    //Consultar si afecta mucho el rendimiento
    let resultado = false;
    if(this.datosVoluntario){

      resultado = this.datosVoluntario.tareas?.some(t=> t.id === tarea.id)!;
    }
    return resultado;

  }
  
}
