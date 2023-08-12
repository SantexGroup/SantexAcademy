import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
  registroUsuario: boolean = false;
  loginUsuario: boolean = false;
  userData?: any = {};
  
  constructor( private userServices: UsuarioService) {}

  ngOnInit(): void {
    this.userServices.registroUsuario.subscribe({
      next: (registroUsuario) => {
        this.registroUsuario = registroUsuario;
      }
    })

    this.userServices.logindeUsuario.subscribe({
      next: (logindeUsuario) => {
        this.loginUsuario = logindeUsuario;
      }
    })

    this.userServices.userData.subscribe({
      next: (userData) => {
        this.userData = userData;
      } 
    })
  }

}
