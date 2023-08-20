import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { VoluntarioService } from 'src/app/core/services/voluntario.service';

@Component({
  selector: 'app-voluntarios',
  templateUrl: './voluntarios.component.html',
  styleUrls: ['./voluntarios.component.css']
})
export class VoluntariosComponent implements OnInit {
  @ViewChild('sideNav') sideNav!:MatSidenav;


  constructor(private voluntarioService:VoluntarioService, private router:Router) { }

  ngOnInit(): void {
  }

  redireccionarA(ruta:string):void{
    this.router.navigate([ruta]);
    this.sideNav.close();
  }

  cerrarSesion(){
    this.voluntarioService.credencialesVoluntario.next(null);
    this.router.navigate(['/index']);

  }

}
