import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CuentaService } from 'src/app/core/services/cuenta.service';
import { VoluntarioService } from 'src/app/core/services/voluntario.service';

@Component({
  selector: 'app-voluntarios',
  templateUrl: './voluntarios.component.html',
  styleUrls: ['./voluntarios.component.css']
})
export class VoluntariosComponent implements OnInit {
  @ViewChild('sideNav') sideNav!:MatSidenav;


  constructor(private voluntarioService:VoluntarioService, private router:Router,private matSnackBar:MatSnackBar, private cuentaService:CuentaService) { }

  ngOnInit(): void {

    this.voluntarioService.obtenerDatosVoluntario().subscribe({
      next:(res)=>{
        console.log(res);
        this.router.navigate(['/voluntario/dashboard']);
      },
      error:()=>{
        this.cuentaService.setCredencialesUsuario = null;
        
        this.matSnackBar.open('Sesión Caducada','ERROR',{
          duration:3000,
        horizontalPosition:'center',
        verticalPosition:'top'}
        );
        
        localStorage.removeItem('credencialesUsuario');
        this.router.navigate(['/index/login']);
        
      }
    }
      
    );
  }

  redireccionarA(ruta:string):void{
    this.router.navigate([ruta]);
    this.sideNav.close();
  }

  cerrarSesion(){
    this.cuentaService.setCredencialesUsuario = null;
    localStorage.removeItem('credencialesVoluntario');
    this.router.navigate(['/index']);

  }

}
