import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/core/services/login.service';

/*
import { HttpClient } from '@angular/common/http';
import { ModeloUsuario } from './interfaces/modelo-usuario';
*/

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  corLog: string = '';
  pasLog: string = '';

  constructor(private service: LoginService) { }

  ngOnInit(): void {
  }

  botonLogin() {
    console.log(this.corLog + this.pasLog);
    this.service.login(this.corLog, this.pasLog).subscribe(respuesta => {
      console.log(respuesta)
    })
  }
}


