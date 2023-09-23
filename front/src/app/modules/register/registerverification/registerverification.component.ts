import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registerverification',
  templateUrl: './registerverification.component.html',
  styleUrls: ['./registerverification.component.css']
})

export class RegisterverificationComponent implements OnInit {
    codeRegister: string =''; // Variable para almacenar el codigo de registro
    //message: string =''; // Variable para almacenar el mensaje de respuesta

    isPopupVisible: boolean = false; // Controla si se muestra la ventana emergente

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private http: HttpClient
    ) { }

  ngOnInit(): void {
     this.route.queryParams.subscribe(params => {
       this.codeRegister = params['codeRegister'];// Capturo codigo de la URL
       console.log(`Paso 1: Código capturado de la URL registerverif: ${this.codeRegister}`);
    });
     if (this.codeRegister) {
      console.log(`Paso 2: Enviando código al backend para verificación: ${this.codeRegister}`);
       this.vacodigoAnode(this.codeRegister);// Envia codeRegister al backend
     }
     console.log(this.isPopupVisible)
     this.isPopupVisible = true; // Controla si se muestra la ventana emergente
  }

    vacodigoAnode(codeRegister: string): void { 
      // Realiza una solicitud POST al backend para verificar el código
      console.log(`Paso 4: Realizando solicitud POST al backend para verificar el código: ${codeRegister}`);
      this.http.post<any>('http://localhost:4001/user/verifyLink', { codeRegister }).subscribe(
        response => {
          if (response && response.success === 'success') {
            console.log(this.isPopupVisible)
            console.log(`Paso 5: Respuesta exitosa del backend: ${JSON.stringify(response)}`);
             alert('Registro exitoso');
             this.router.navigate(['login']); // Redirige solo si la respuesta es 'success'
          } else {// Respuesta de error
            console.log(`Paso 6: Respuesta de error del backend: ${JSON.stringify(response)}`);
             alert('Hubo un error en el registro');
             this.router.navigate(['register']);
          }
        },
        error => {
           console.error(error);// Maneja el error si la solicitud al backend falla
           console.error(`Paso 7: Error en la solicitud al backend: ${JSON.stringify(error)}`);
           alert('Error en la verificación del código de registro.');
        }
      )
    };
        closePopup() {
          this.isPopupVisible = false; // Ocultar el popup al hacer clic en el botón "Cerrar"
        }
}
