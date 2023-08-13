import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoluntarioService } from 'src/app/core/services/voluntario.service';

@Component({
  selector: 'app-voluntarios',
  templateUrl: './voluntarios.component.html',
  styleUrls: ['./voluntarios.component.css']
})
export class VoluntariosComponent implements OnInit {

  constructor(private voluntarioService:VoluntarioService, private router:Router) { }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.voluntarioService.credencialesVoluntario.next(null);
    this.router.navigate(['/index']);

  }

}
