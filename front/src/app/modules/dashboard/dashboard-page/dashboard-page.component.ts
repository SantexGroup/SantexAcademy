import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent {
  registroUsuario: boolean = false;
  userData?: any = {};
  
  constructor( private registerServices: RegisterService) {}

  ngOnInit(): void {
    this.registerServices.registroUsuario.subscribe({
      next: (registroUsuario) => {
        this.registroUsuario = registroUsuario;
      }
    })

    this.registerServices.userData.subscribe({
      next: (userData) => {
        this.userData = userData;
      } 
    })
  }

}
