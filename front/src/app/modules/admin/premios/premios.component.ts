import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearModificarPremioComponent } from '../modales/crear-modificar-premio/crear-modificar-premio.component';
import { ListadoPremiosComponent } from '../../shared/components/listado-premios/listado-premios.component';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.component.html',
  styleUrls: ['./premios.component.css']
})
export class PremiosComponent implements OnInit {

  constructor(private modal:MatDialog) { }

  ngOnInit(): void {
  }

  @ViewChild(ListadoPremiosComponent)listadoPremios!:ListadoPremiosComponent;


  crear():void{
    this.modal.open(CrearModificarPremioComponent).afterClosed().subscribe({
      next:(res)=>{
        if(res===true) {
          this.listadoPremios.mostrarPremios();
        } 

      }
    });
  }

}
