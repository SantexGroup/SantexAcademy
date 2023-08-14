import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizacionService } from 'src/app/core/services/organizacion.service';

@Component({
  selector: 'app-organizaciones',
  templateUrl: './organizaciones.component.html',
  styleUrls: ['./organizaciones.component.css']
})
export class OrganizacionesComponent implements OnInit {

  constructor(private organizacionService:OrganizacionService, private router:Router) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.organizacionService.credencialesOrganizacion.next(null);
    this.router.navigate(['/index']);

  }

}
