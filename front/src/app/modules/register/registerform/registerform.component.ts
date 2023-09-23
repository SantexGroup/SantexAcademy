import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegistroService } from '../../../core/services/registro.service';
import { User } from '../../users/interface/user.interface';
import { UsersService } from '../../users/services/users.service';
import { TiposDeUsuarioService } from '../../users/services/tiposdeusuarioservice';
import { TipoDeUsuario } from '../../users/interface/tipodeusuario.interface';

//Se debe utilizar el mismo componente que el alta de usuario ya que quedó duplicado el dódigo.
//Componente app-registerform y app-create
@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  form: FormGroup;
  showRegisterForm: boolean = true;// Para ocultar formulario
  showRegisterAnswer: boolean = false; // Para mostar pagina de repuesta registeranswer

  tipoUsuarioNvo: TipoDeUsuario = {
    nombre: 'Vacio',
    descripcion: 'Vacio'
  };

  userData: User = {
    username: '',
    password: '',
    apellido: '',
    nombre: '',
    email: '',
    estado: 'A',
    confirmPassword: '',
    idtipodeusuario: 0,
    activoactualmente: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    TipoDeUsuario: this.tipoUsuarioNvo,
    verificationCode: false,
    codeRegister: 'SinConfirmar',
  }

  tipoDeUsuarioSeleccionado: number | undefined = undefined;
  tiposDeUsuario: TipoDeUsuario[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private registroService: RegistroService,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    private tipoDeUsuarioService: TiposDeUsuarioService,
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
    // Agrego validadores para poder usar funcion* que compare valores de password
    this.form.get('confirmPassword')?.setValidators([
      Validators.required,
      this.passwordCompare.bind(this)
    ]);
  };

  // Función para validar selección de tipo de usuario
  validateUserType(control: any) {
    if (control.value === 'Seleccione') {
      return { invalidUserType: true };
    }
    return null;
  }

  ngOnInit(): void {
     //Obtengo los niveles
     this.tipoDeUsuarioService.getTiposDeUsuario().subscribe((data: TipoDeUsuario[]) => {
      this.tiposDeUsuario = data;
      this.tipoDeUsuarioSeleccionado = undefined;
      console.log(this.tiposDeUsuario);
    });
  }

  // *Funcion para validar coincidencia de contraseñas
  passwordCompare(control: AbstractControl): { [key: string]: any } | null {
    const password = this.form.get('password')?.value;
    const confirmPassword = control.value;
    if (password === confirmPassword) {
      return null; // Las contraseñas coinciden, no hay error
    } else {
      return { coincidePassword: true }; // Las contraseñas no coinciden, se manda el error
    }
  }

  ////////////////////////////////Funcion de envio de datos del formulario/////////////////////////////////////////////
  onEnviar(event: Event, usuario: User): void {
    event.preventDefault;
    const userType = this.form.get('userType')?.value;
    if (this.form.valid) {
       if (this.tipoDeUsuarioSeleccionado !== undefined) {
         this.userData.idtipodeusuario = this.tipoDeUsuarioSeleccionado;// Asigna el valor de tipoDeUsuarioSeleccionado a userData
         //Envia datos recogidos por el formulario al backend y redirige front despues de una respuesta
         this.usersService.addUser(this.userData)
           .subscribe(user => {
             if (user) {
               console.log('Registro exitoso:', user);
               alert("Sea registrado exitosamente. Por favor revise su correo.");
               this.redirregistersuccess()
            } else {
               console.error('Error al registrar');
            }
        })
      } else {
        console.error('El tipo de usuario no fue seleccionado o es undefined.');
      }
    }
    else {
      this.form.markAllAsTouched();
    }
  };
  ////////////////////////////////////////////////////////////////////////

  // Funcion que redirige a la pagina de respuesta se usa en onEnviar
  redirregistersuccess() {
    this.router.navigate(['registeranswer']);
  }

  // Maneja la seleccion de tipo y guarda seleccion
  onTipoDeUsuarioChange(event: any): void {
    this.tipoDeUsuarioSeleccionado = event.target.value; 
    // Busca el tipo de usuario seleccionado en this.tiposDeUsuario para cambiarlo
    const tipoDeUsuarioSeleccionado = this.tiposDeUsuario.find(tipo => tipo.id === this.tipoDeUsuarioSeleccionado);

      if (!this.tipoUsuarioNvo) {
         console.error('Tipo de usuario no encontrado');
      }

      this.userData.TipoDeUsuario = this.tipoUsuarioNvo;// Actualiza this.userData.TipoDeUsuario con la eleccion del usuario
  }

  get Password() {
    return this.form.get("password");
  }

  get Nombre() {
    return this.form.get("nombre");
  }

  get Apellido() {
    return this.form.get("apellido");
  }

  get Mail() {
    return this.form.get("email");
  }

  get Username() {
    return this.form.get("username");
  }

  get MailValid() {
    return this.Mail?.touched && !this.Mail?.valid;
  }

  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }

  get NombreValid() {
    return this.Nombre?.touched && !this.Nombre?.valid;
  }

  get ApellidoValid() {
    return this.Apellido?.touched && !this.Apellido?.valid;
  }

}

