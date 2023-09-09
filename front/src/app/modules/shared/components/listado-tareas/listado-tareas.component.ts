import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Tarea } from 'src/app/core/interfaces/tarea';
import { TareaService } from 'src/app/core/services/tarea.service';
import { DetalleTareaComponent } from '../../../organizaciones/modales-organizacion/detalle-tarea/detalle-tarea.component';
import { VoluntarioService } from 'src/app/core/services/voluntario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent implements OnInit {

  constructor(private tareaService:TareaService, private dialog:MatDialog, private voluntarioService:VoluntarioService) { }

  ngOnInit(): void {
    this.mostrarTareas();
  }
  @Input() esVoluntario:boolean = false;
   
  listadoTareas:Tarea[] = [];


  mostrarTareas():void{
    this.tareaService.getTareas().subscribe({
      next:(res)=>{
        this.listadoTareas = res;
        console.log(res);
      },
      error:()=>{
      }
    });
  }

  mostrarDetalles(tarea:Tarea):void{
    this.dialog.open(DetalleTareaComponent,{data:tarea});
  }

  inscribirVoluntario(tarea:Tarea):void{
    
    let idVoluntario:number;

    this.voluntarioService.getDatosVoluntario.subscribe({
      next:(res)=>{
        idVoluntario = res?.id!;
      }
    });

    if(idVoluntario!){

      Swal.fire({
        title: 'Estas seguro/a?',
        text: "Deseas inscribirte en la tarea: "+tarea.name+"?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si'
      }).then((result) => {
        if (result.isConfirmed) {
          this.tareaService.inscribirVoluntario(tarea.id!,idVoluntario!).subscribe({
            next:()=>{
              Swal.fire(
                'Felicitaciones!',
                `Te has inscripto a la tarea: ${tarea.name}`,
                'success'
              );
              this.mostrarTareas();
            },
            error:()=>{
              Swal.fire(
                'Error',
                'No se pudo realizar la inscripción.',
                'error'
              );
            }
            });
          };
          
        })
    };
  }    
}
