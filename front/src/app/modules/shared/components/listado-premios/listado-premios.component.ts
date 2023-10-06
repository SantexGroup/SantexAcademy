import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Premio } from 'src/app/core/interfaces/premio';
import { ResumenVoluntario } from 'src/app/core/interfaces/resumenVoluntario';
import { Voluntario } from 'src/app/core/interfaces/voluntario';
import { PremioService } from 'src/app/core/services/premio.service';
import { VoluntarioService } from 'src/app/core/services/voluntario.service';
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

  datosVoluntario:ResumenVoluntario|null = null;

  pdfUrl!:string;

  constructor(private premioService:PremioService, private modal:MatDialog, private voluntarioService:VoluntarioService) { }

  ngOnInit(): void {
    if(this.esVoluntario) {
      this.obtenerDatosVoluntarios();
    }
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

  obtenerDatosVoluntarios():void{
    this.voluntarioService.obtenerDatosVoluntario().subscribe({
      next:(res)=>{
        this.datosVoluntario = res;
        console.log(res);
      }
    });
  }

  verificarCanje(premio:Premio):boolean{
    let resultado = false;
    if(this.datosVoluntario){

      resultado = this.datosVoluntario.premiosCanjeados.some(p=> p.id === premio.id)!;
    }
    return resultado;

  }

  canjear(premio:Premio):void{
    this.premioService.canjear(this.datosVoluntario?.voluntario.id!, premio.id!).subscribe({
      next:(data:Blob)=>{
        const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        this.pdfUrl = url;

        Swal.fire({
          title: 'Canje Exitoso!',
          text: "Descargá el pdf que se va a abrir.",
          icon: 'success',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Entendido'
        }).then((result) => {
          if (result.isConfirmed) {
            window.open(this.pdfUrl, '_blanck');
          }
        })

        this.obtenerDatosVoluntarios();
        this.mostrarPremios();

      },
      error:()=>{
          Swal.fire(
            'Error',
            'Error al canjear el premio.',
            'error'
          );
      }
    });
  }

}
