import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/core/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router, private adminService:AdminService) { }

  @ViewChild('sideNav')sideNav!:MatSidenav;

  ngOnInit(): void {
    this.router.navigate(['admin/tareas']);
  }
  redireccionarA(ruta:string):void{
    this.router.navigate([ruta]);
    this.sideNav.close();
  }
  cerrarSesion(){
    this.adminService.setCredencialesAdmin = null;
    localStorage.removeItem('credencialesAdmin');
    this.router.navigate(['/index']);

  }
}
