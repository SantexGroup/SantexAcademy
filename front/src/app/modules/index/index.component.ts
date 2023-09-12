import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Credencial } from 'src/app/core/interfaces/credencial';
import { AdminService } from 'src/app/core/services/admin.service';
import { OrganizacionService } from 'src/app/core/services/organizacion.service';
import { VoluntarioService } from 'src/app/core/services/voluntario.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  
  @ViewChild('sideNav') sideNav!:MatSidenav;
  constructor(private router:Router, organizacionService:OrganizacionService,voluntarioService:VoluntarioService, adminService:AdminService) {

    this.credencialesOrganizacion$ = organizacionService.getCredencialesOrganizacion;

    this.credencialesVoluntario$ = voluntarioService.getCredencialesVoluntario;

    this.credencialesAdmin$ = adminService.getCredencialesAdmin;


  }
  
  credencialesOrganizacion$:Observable<Credencial|null>;
  credencialesVoluntario$:Observable<Credencial|null>;
  credencialesAdmin$:Observable<Credencial| null>;

  ngOnInit(): void {
  }

  irLoginVoluntarios(){
    this.router.navigate(['/index/login'],{queryParams:{tipo:'voluntario'}});
    this.sideNav.close();
  }

  irLoginOrganizaciones(){
    this.router.navigate(['/index/login'],{queryParams:{tipo:'organizacion'}});
    this.sideNav.close();
  }

 redireccionarA(ruta:string):void{
    this.router.navigate([ruta]);
    this.sideNav.close();
  }

}
