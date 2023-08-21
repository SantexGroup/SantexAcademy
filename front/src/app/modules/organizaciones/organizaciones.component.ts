import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { OrganizacionService } from 'src/app/core/services/organizacion.service';

@Component({
  selector: 'app-organizaciones',
  templateUrl: './organizaciones.component.html',
  styleUrls: ['./organizaciones.component.css']
})
export class OrganizacionesComponent implements OnInit {
  @ViewChild('sideNav')sideNav!:MatSidenav;
  constructor(private organizacionService:OrganizacionService, private router:Router) { }

  ngOnInit(): void {

    this.organizacionService.obtenerDatosOrganizacion().subscribe({
      next:()=>{
        
        this.router.navigate(['organizaciones/dashboard']);
      },
      error:()=>{
        this.organizacionService.setCredencialesOrganizacion = null;
        this.router.navigate(['/index']);
      }
    });

  }

  redireccionarA(ruta:string):void{
    this.router.navigate([ruta]);
    this.sideNav.close();
  }
  cerrarSesion(){
    this.organizacionService.setCredencialesOrganizacion = null;
    this.router.navigate(['/index']);

  }

}
