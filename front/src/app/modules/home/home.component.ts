import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UsuarioService } from '../../core/services/usuario.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fullName: string = '';

  constructor(private router: Router, private userDataService: UsuarioService) { }

  ngOnInit(): void {
    this.userDataService.getUserData().subscribe((data: { name: string, lastName: string }) => {
      this.fullName = `${data.name} ${data.lastName}`;
    });
  }

  optionales(){
    this.router.navigate(['/optionales'])
  }
  formacion(){
    this.router.navigate(['/formaciones'])
  }
  experiencias(){
    this.router.navigate(['/experiencias'])
  }
  lenguajes(){
    this.router.navigate(['/lenguajes'])
  }
}
