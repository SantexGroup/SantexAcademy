import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Credencial } from 'src/app/core/interfaces/credencial';
import { CuentaService } from 'src/app/core/services/cuenta.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  
  @ViewChild('sideNav') sideNav!:MatSidenav;
  constructor(private router:Router, cuentaService:CuentaService) {


    this.credencialesUsuario$ = cuentaService.getCredencialesUsuario;

  }
  
  credencialesUsuario$:Observable<Credencial| null>;

  ngOnInit(): void {
  }

  irLogin(){
    this.router.navigate(['/index/login']);
    this.sideNav.close();
  }

  
 redireccionarA(ruta:string):void{
    this.router.navigate([ruta]);
    this.sideNav.close();
  }

}
