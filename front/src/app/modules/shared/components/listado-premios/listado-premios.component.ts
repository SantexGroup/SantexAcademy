import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Premio } from 'src/app/core/interfaces/premio';
import { PremioService } from 'src/app/core/services/premio.service';
import { CrearModificarPremioComponent } from 'src/app/modules/admin/modales/crear-modificar-premio/crear-modificar-premio.component';

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

}
