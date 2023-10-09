import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ResumenOrganizacion } from 'src/app/core/interfaces/resumenOrganizacion';
import { Tarea } from 'src/app/core/interfaces/tarea';
import { OrganizacionService } from 'src/app/core/services/organizacion.service';
import { DetalleTareaComponent } from '../../shared/components/detalle-tarea/detalle-tarea.component';

@Component({
  selector: 'app-dashboard-organizacion',
  templateUrl: './dashboard-organizacion.component.html',
  styleUrls: ['./dashboard-organizacion.component.css']
})
export class DashboardOrganizacionComponent implements OnInit {

  constructor(organizacionService:OrganizacionService, private modal:MatDialog) {
    this.datosOrganizacion$ = organizacionService.getDatosOrganizacion;
  }

  datosOrganizacion$:Observable<ResumenOrganizacion|null>;


  ngOnInit(): void {
  }

  verDetalles(tarea:Tarea):void{
    this.modal.open(DetalleTareaComponent, {data:tarea}); 
  }

}
