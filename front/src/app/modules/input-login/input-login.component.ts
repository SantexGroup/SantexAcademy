import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { authService } from 'src/app/core/services/auth.service';
import { HttpClient } from '@angular/common/http';

type email={
  email:string
}

@Component({
  selector: 'app-input-login',
  templateUrl: './input-login.component.html',
  styleUrls: ['./input-login.component.css']
})
export class InputLoginComponent implements OnInit {
  email = new FormControl("",[Validators.email,Validators.required])
  
constructor(private http: HttpClient,  private authservice: authService,  private router: Router) { }
  ngOnInit(): void {
   
  }

  redirectToContra() {
    if(this.email.valid==false){
      console.log("error");
      return;

    }
   
    this.authservice.login(this.email.value).subscribe({

      next:(response) => {
        this.router.navigate(['/Contrasenia']); // Lógica de manejo de respuesta exitosa (por ejemplo, guardar token)
        
      },
      error:(error) => {
        console.error('Error en el inicio de sesión', error);
        // this.router.navigate(['/contra']);
        // Lógica de manejo de error
      }
    })
  }
};

