import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegistroService } from '../../../core/services/registro.service';
import { User } from '../../users/interface/user.interface';
import { UsersService } from '../../users/services/users.service';

//Se debe utilizar el mismo componente que el alta de usuario ya que quedó duplicado el dódigo.
//Componente app-registerform y app-create
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  form:FormGroup;
  showRegisterForm: boolean = true;// Para ocultar formulario
  showRegisterAnswer: boolean = false; // Para mostar pagina de repuesta registeranswer

  userData: User = {
    username: '',
    password: '',
    apellido: '',
    nombre: '',
    email: '',
    estado: true,
    confirmPassword: '',
    tipodeusuario: 0,
    createdAt: new Date,
    updatedAt: new Date
  }


  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private registroService: RegistroService,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    ) {
      this.form = this.formBuilder.group(
        {
          nombre: ['', [Validators.required]],
          apellido: ['', [Validators.required]],
          username: ['', [Validators.required]],
          password: ['', [Validators.required, Validators.minLength(8)]],
          confirmPassword: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          agreeTerms: ['', [Validators.required]],
          userType: ['Seleccione', [Validators.required, this.validateUserType]]
        },
      );
    };

    // Función para validar selección de tipo de usuario
  validateUserType(control: any) {
    if (control.value === 'Seleccione') {
      return { invalidUserType: true };
    }
    return null;
  }

  ngOnInit(): void {

  }

  //Falta manejo de errores
  onEnviar(event: Event, usuario:User): void {
    event.preventDefault; 
    const userType = this.form.get('userType')?.value;
    if (this.form.valid)
    {
      this.usersService.addUser(this.userData)
          .subscribe( user => {
            if (user) {
              console.log('Registro exitoso:', user);
              alert("El registro ha sido creado satisfactoriamente. Por favor inicie Sesión.");
              this.router.navigate(['/users/index' ])
            } else {
              console.error('Error al registrar');
            }       
          })   
    }
    else
    {
      this.form.markAllAsTouched(); 
    }
  };


redirregistersuccess() {
  this.router.navigate(['registeranswer']);// Funcion que redirige a la página de respuesta
}

/*Método de Edu
submitForm() {
    this.http.post<any>('http://localhost:4001/user/', this.userData).subscribe(
      response => {
        if (response.redirectTo) {
          this.router.navigate([response.redirectTo]);
        } else {
          console.log('False? showRegisterAnswer:', this.showRegisterAnswer);//BORRAR establece a false
          console.log('Registro exitoso:', response);
          this.showRegisterForm = false; // Oculta el formulario
          console.log('False? showRegisterForm:', this.showRegisterForm);//BORRAR establese a False
          this.showRegisterAnswer = true; // Establecer a true después de enviar el formulario
          console.log('True? showRegisterAnswer:', this.showRegisterAnswer);//BORRAR establece a true
          this.redirregistersuccess();// Redirige a la respuesta exitosa
          console.log('Despues de redirigir');//BORRAR
        }

        (error: any) => {
          console.error('Error al registrar:', error);
        }
      
      }
    );
  }*/

  get Password()
  {
    return this.form.get("password");
  }

  get Nombre()
  {
    return this.form.get("nombre");
  }

  get Apellido()
  {
    return this.form.get("apellido");
  }

  get Mail()
  {
  return this.form.get("email");
  }

  get Username()
  {
  return this.form.get("username");
  }

  get MailValid()
  {
    return this.Mail?.touched && !this.Mail?.valid;
  }

  get PasswordValid()
  {
    return this.Password?.touched && !this.Password?.valid;
  }

  get NombreValid()
  {
    return this.Nombre?.touched && !this.Nombre?.valid;
  }

  get ApellidoValid()
  {
    return this.Apellido?.touched && !this.Apellido?.valid;
  }

}
