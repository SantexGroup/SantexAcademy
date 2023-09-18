import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Premio } from 'src/app/core/interfaces/premio';
import { PremioService } from 'src/app/core/services/premio.service';
import { CrearModificarPremioComponent } from 'src/app/modules/admin/modales/crear-modificar-premio/crear-modificar-premio.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listado-premios',
  templateUrl: './listado-premios.component.html',
  styleUrls: ['./listado-premios.component.css']
})
export class ListadoPremiosComponent implements OnInit {

  @Input()esVoluntario:boolean = false;
  @Input()esAdmin:boolean = false;

  listPremios:Premio[] = [];

  constructor(private premioService:PremioService, private modal:MatDialog) { }

  ngOnInit(): void {
    this.mostrarPremios();
  }

  mostrarPremios():void{
    this.premioService.mostrar().subscribe({
      next:(res)=>{
        this.listPremios = res;
      }
    });
  }

  modificar(premio:Premio):void{
    this.modal.open(CrearModificarPremioComponent, {data:premio}).afterClosed().subscribe({
      next:(res)=>{
        if(res===true) this.mostrarPremios();
      }
    });
  }

  eliminar(premio:Premio):void{
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
        
        this.premioService.eliminar(premio.id!).subscribe({
          next:()=>{
               
            Swal.fire(
              'Eliminado!',
              `El premio "${premio.name}" ha sido eliminado.`,
              'success'
            );
            this.mostrarPremios();
          
          },
          error:(err)=>{
            console.log(err);
            Swal.fire(
              'Error',
              'No se pudo eliminar el premio.',
              'error'
            );
          }
        });
        
      }
    })
  }

}
