import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ResumenVoluntario } from 'src/app/core/interfaces/resumenVoluntario';
import { Tarea } from 'src/app/core/interfaces/tarea';
import { Voluntario } from 'src/app/core/interfaces/voluntario';
import { TareaService } from 'src/app/core/services/tarea.service';
import { VoluntarioService } from 'src/app/core/services/voluntario.service';
import Swal from 'sweetalert2';
import { DetalleTareaComponent } from '../../shared/components/detalle-tarea/detalle-tarea.component';

@Component({
  selector: 'app-dashboard-voluntario',
  templateUrl: './dashboard-voluntario.component.html',
  styleUrls: ['./dashboard-voluntario.component.css']
})
export class DashboardVoluntarioComponent implements OnInit{

  constructor(private voluntarioService:VoluntarioService, private tareaService:TareaService, private modal:MatDialog) { 
    
    this.suscripcion = this.voluntarioService.obtenerDatosVoluntario().subscribe();
    this.datosVoluntario$ = this.voluntarioService.getDatosVoluntario;
  }
  
  datosVoluntario$:Observable<ResumenVoluntario | null>;
  suscripcion;
  ngOnInit(): void {
  }





  desinscribirVoluntario(tarea:Tarea,resumenVoluntario:ResumenVoluntario):void{
    
   
 
       Swal.fire({
         title: 'Estas seguro/a?',
         text: "Deseas desinscribirte a la tarea: "+tarea.name+"?",
         icon: 'warning',
         iconColor:'#d33',
         showCancelButton: true,
         confirmButtonColor: '#d33',
         cancelButtonColor: '#3085d6',
         cancelButtonText: 'No, Cancelar',
         confirmButtonText: 'Si'
       }).then((result) => {
         if (result.isConfirmed) {
           this.tareaService.desinscribirVoluntario(tarea.id!,resumenVoluntario.voluntario.id!).subscribe({
             next:(res)=>{
               Swal.fire(
                 'Ok!',
                 `Te desinscribiste a la tarea: ${tarea.name}`,
                 'success'
               );

               this.voluntarioService.obtenerDatosVoluntario().subscribe();
             },
             error:()=>{
               Swal.fire(
                 'Error',
                 'No se pudo cancelar la inscripción.',
                 'error'
               );
             }
             });
           };
           
         })
  };

  verDetalles(tarea:Tarea):void{

    this.modal.open(DetalleTareaComponent, {data:tarea});

  }


    


}
