import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordService } from 'src/app/core/services/password.service';
import { HttpClient } from '@angular/common/http'; 

type password={
  password:string;
}
@Component({
  selector: 'app-input-contrasenia',
  templateUrl: './input-contrasenia.component.html',
  styleUrls: ['./input-contrasenia.component.css']
})//min 3
export class InputContraseniaComponent implements OnInit {
  password = new FormControl("",[Validators.minLength(8), Validators.required])

  constructor(private passwordservice: PasswordService,  private router: Router) { }

  ngOnInit(): void {
  
  }

  redirectToData() {
    console.log(console.log(this.password.errors?.['minlength']));
    
    if(this.password.valid==false){
      console.log("error");
      return;

    }
   
    this.passwordservice.login(this.password.value).subscribe(

      (response) => {
        this.router.navigate(['/dashboard']); // ingresar componente proximo
        
      },
      (error) => {
        console.error('Error en el inicio de password', error);
        this.router.navigate(['/dashboard']);
        // Lógica de manejo de error
      }
    );
  }

}
