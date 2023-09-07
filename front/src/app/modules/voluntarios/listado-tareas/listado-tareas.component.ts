import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tarea } from 'src/app/core/interfaces/tarea';
import { TareaService } from 'src/app/core/services/tarea.service';
import { DetalleTareaComponent } from '../../organizaciones/modales-organizacion/detalle-tarea/detalle-tarea.component';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent implements OnInit {

  constructor(private tareasService:TareaService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.mostrarTareas();
  }

  listadoTareas:Tarea[] = [];

  mostrarTareas():void{
    this.tareasService.getTareas().subscribe({
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
  
}