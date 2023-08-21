import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Organizacion } from 'src/app/core/interfaces/organizacion';
import { OrganizacionService } from 'src/app/core/services/organizacion.service';

@Component({
  selector: 'app-dashboard-organizacion',
  templateUrl: './dashboard-organizacion.component.html',
  styleUrls: ['./dashboard-organizacion.component.css']
})
export class DashboardOrganizacionComponent implements OnInit {

  constructor(organizacionService:OrganizacionService) {
    this.datosOrganizacion$ = organizacionService.getDatosOrganizacion;
  }

  datosOrganizacion$:Observable<Organizacion|null>;


  ngOnInit(): void {
  }

}
