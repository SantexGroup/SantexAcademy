import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Voluntario } from 'src/app/core/interfaces/voluntario';
import { VoluntarioService } from 'src/app/core/services/voluntario.service';

@Component({
  selector: 'app-dashboard-voluntario',
  templateUrl: './dashboard-voluntario.component.html',
  styleUrls: ['./dashboard-voluntario.component.css']
})
export class DashboardVoluntarioComponent implements OnInit {

  constructor(private voluntarioService:VoluntarioService) { 
    this.datosVoluntario$ = this.voluntarioService.getDatosVoluntario;
  }

  datosVoluntario$:Observable<Voluntario | null>;

  ngOnInit(): void {
  }

}
