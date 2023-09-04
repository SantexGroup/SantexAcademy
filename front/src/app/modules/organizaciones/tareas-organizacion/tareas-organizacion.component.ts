import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearModificarTareaModalComponent } from '../modales-organizacion/crear-modificar-tarea-modal/crear-modificar-tarea-modal.component';
import { TareaService } from 'src/app/core/services/tarea.service';
import { Tarea } from 'src/app/core/interfaces/tarea';
import { MatTableDataSource } from '@angular/material/table';
import { DetalleTareaComponent } from '../modales-organizacion/detalle-tarea/detalle-tarea.component';

@Component({
  selector: 'app-tareas-organizacion',
  templateUrl: './tareas-organizacion.component.html',
  styleUrls: ['./tareas-organizacion.component.css']
})
export class TareasOrganizacionComponent implements OnInit {

  constructor(private dialog:MatDialog, private tareaService:TareaService) { }

  
  columnasTabla: string[] = ['nombre','fecha','acciones'];
  dataSource = new MatTableDataSource();

  ngOnInit(): void {
    this.mostrarTareas();
  }


  filtrar(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  crearTarea():void{
    this.dialog.open(CrearModificarTareaModalComponent).afterClosed().subscribe({
      next:(res)=>{
        if(res === true){
          this.mostrarTareas();
        }
      }
    });
  }

  mostrarTareas():void{
   
    this.tareaService.getTareas().subscribe({
      next:(res)=>{
        this.dataSource.data = res;
      },
      error:()=>{
        
      }
    });
  }

  verDetalleTarea(tarea:Tarea):void{
    this.dialog.open(DetalleTareaComponent, {data:tarea});
  }

  editarTarea(tarea:Tarea):void{
    this.dialog.open(CrearModificarTareaModalComponent,{data:tarea}).afterClosed().subscribe({
      next:(res)=>{
        if(res === true){
          this.mostrarTareas();
        }
      }
    });
  }

}
