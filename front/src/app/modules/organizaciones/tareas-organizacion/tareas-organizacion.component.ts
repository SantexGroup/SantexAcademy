import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearModificarTareaModalComponent } from '../modales-organizacion/crear-modificar-tarea-modal/crear-modificar-tarea-modal.component';
import { TareaService } from 'src/app/core/services/tarea.service';
import { Tarea } from 'src/app/core/interfaces/tarea';
import { MatTableDataSource } from '@angular/material/table';
import { DetalleTareaComponent } from '../../shared/components/detalle-tarea/detalle-tarea.component';
import Swal from 'sweetalert2';
import { VoluntariosInscriptosComponent } from '../modales-organizacion/voluntarios-inscriptos/voluntarios-inscriptos.component';

@Component({
  selector: 'app-tareas-organizacion',
  templateUrl: './tareas-organizacion.component.html',
  styleUrls: ['./tareas-organizacion.component.css']
})
export class TareasOrganizacionComponent implements OnInit {

  constructor(private dialog:MatDialog, private tareaService:TareaService) { }

  
  columnasTabla: string[] = ['nombre','estado','acciones'];
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
   
    this.tareaService.getTareasPorIdOrg().subscribe({
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

  eliminarTarea(tarea:Tarea):void{
    Swal.fire({
      title: 'Estas seguro/a?',
      text: "No podrás revertir esto.",
      icon: 'warning',
      iconColor:'#d33',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.tareaService.eliminarTarea(tarea.id!).subscribe({
          next:()=>{
               
            Swal.fire(
              'Eliminado!',
              `La tarea "${tarea.name}" ha sido eliminada.`,
              'success'
            );
            this.mostrarTareas();
          
          },
          error:(err)=>{
            console.log(err);
            Swal.fire(
              'Error',
              'No se pudo eliminar la tarea.',
              'error'
            );
          }
        });
        
      }
    })
  }

  cambiarEstado(tarea:Tarea):void{
    
    const nuevoEstado:string = tarea.estado === 'activa'?'Finalizada':'Activa';
    
    Swal.fire({
      title: 'Estas seguro/a?',
      text: `Quieres modificar el estado de la tarea a: ${nuevoEstado}?`,
      icon: 'warning',
      iconColor:'#d33',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Si, modificar'
    }).then((result) => {
      if (result.isConfirmed) {
        
        this.tareaService.modificarEstado(tarea.id!, nuevoEstado.toLocaleLowerCase()).subscribe({
          next:()=>{
               
            Swal.fire(
              'Modificado!',
              `La tarea ahora tiene un estado de ${nuevoEstado}.`,
              'success'
            );
            this.mostrarTareas();
          
          },
          error:(err)=>{
            console.log(err);
            Swal.fire(
              'Error',
              'No se pudo modificar el estado.',
              'error'
            );
          }
        });
        
      }
    })
  }

  verInscriptos(tarea:Tarea):void{
    this.dialog.open(VoluntariosInscriptosComponent, {data:tarea});
  }

}
