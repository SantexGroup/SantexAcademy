import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin.service';
import { CuentaService } from 'src/app/core/services/cuenta.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router, private cuentaService:CuentaService) { }

  @ViewChild('sideNav')sideNav!:MatSidenav;

  ngOnInit(): void {
    this.router.navigate(['admin/tareas']);
  }
  redireccionarA(ruta:string):void{
    this.router.navigate([ruta]);
    this.sideNav.close();
  }
  cerrarSesion(){
    this.cuentaService.setCredencialesUsuario = null;
    localStorage.removeItem('credencialesUsuario');
    this.router.navigate(['/index']);

  }
}
