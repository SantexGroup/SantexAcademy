import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

import { RegistroService } from '../../../core/services/registro.service';
import { User } from '../../users/interface/user.interface';
import { UsersService } from '../../users/services/users.service';
//import { TiposDeUsuarioService } from '../../users/services/tiposdeusuarioservice';// Ya no se usa
import { TipoDeUsuario } from '../../users/interface/tipodeusuario.interface';// Ya no se usa

//Se debe utilizar el mismo componente que el alta de usuario ya que quedó duplicado el dódigo.
//Componente app-registerform (para usuarios) y app-create (para administracion)
// Se modifica solo para usaurios como Registro de alumnos de manera predeterminada. El otro queda bajo la autorización de admin

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
    nombre: 'Alumno',
    descripcion: 'Alumno'
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

  tipoDeUsuarioSeleccionado: string | undefined = 'Alumno';//number
  //tiposDeUsuario: TipoDeUsuario[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private registroService: RegistroService,
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    //private tipoDeUsuarioService: TiposDeUsuarioService,
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
        userType: ['Alumno', [Validators.required]]//'Seleccione' y de validator sale , this.validateUserType
      },
    );
    // Agrego validadores para poder usar funcion* que compare valores de password
    this.form.get('confirmPassword')?.setValidators([
      Validators.required,
      this.passwordCompare.bind(this)
    ]);
  };

  // // Función para validar selección de tipo de usuario// Ya o se usa
  // validateUserType(control: any) {
  //   if (control.value === 'Seleccione') {
  //     return { invalidUserType: true };
  //   }
  //   return null;
  // }

  ngOnInit(): void {
    //  //Obtengo los tipos de usuario
    //  this.tipoDeUsuarioService.getTiposDeUsuario().subscribe((data: TipoDeUsuario[]) => {
    //   this.tiposDeUsuario = data;
    //   this.tipoDeUsuarioSeleccionado = undefined;
    //   console.log(this.tiposDeUsuario);
    // });
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
    event.preventDefault();//Se agrega () que faltaba
    //const userType = this.form.get('userType')?.value;
    if (this.form.valid) {
      //if (this.tipoDeUsuarioSeleccionado !== 'Alumno') {// Se saca undefined y se agrega 'Alumno' como predeterminado
        if (this.tipoDeUsuarioSeleccionado === 'Alumno') {
          this.userData.idtipodeusuario = 2; // Asigno el valor numérico 2 a userData
        }
         //this.userData.idtipodeusuario = this.tipoDeUsuarioSeleccionado;// Asigna el valor de tipoDeUsuarioSeleccionado a userData
         //Envia datos recogidos por el formulario al backend y redirige front despues de una respuesta
         this.usersService.addUser(this.userData)
           .subscribe(user => {
            console.log('Valores enviados en la solicitud:', this.userData);//BORRAR
             if (user) {
               console.log('Registro exitoso:', user);
               alert("Se ha registrado exitosamente. Por favor revise su correo.");
               this.redirregistersuccess()
            } else {
               console.error('Error al registrar en onEnviar');
            }
        })
      //} else {
      //  console.error('El tipo de usuario no es Alumno.');
      //}
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

  mostrarTerminosYCondiciones(): void {
    Swal.fire({
      title: 'Términos y Condiciones',
      html: '<p>Términos del Servicio - Proyecto de Estudio INCUBADORA DEL NOC</p><p>Este acuerdo ("Acuerdo") se establece y entra en vigor a partir de "ahora" (en adelante, "Fecha de Inicio"), entre el Equipo2 (en adelante, "Equipo2" o "Nosotros") y el Usuario (en adelante, "Usuario" o "Tú"). Al aceptar los términos y condiciones de este Acuerdo, reconoce y acepta estar obligado por los siguientes términos y condiciones:</p><p>1. Participación Obligatoria: Por el simple hecho de asistir o presenciar cualquier presentación, discusión o mención del proyecto de estudio ("ProyectoNOC"), aceptas y te conviertes en un participante necesario en este acuerdo. 2. Responsabilidades del Usuario: Como participante necesario, aceptas las siguientes responsabilidades: Limpiar los baños una vez a la semana, independientemente de tu ubicación geográfica. Servir café al Equipo2 en un mínimo de tres ocasiones a la semana, bajo tu propia discreción y responsabilidad. Reconocer que tu alma ya no es de tu propiedad y pasa a formar parte del patrimonio del Equipo2. 3. Restricciones Adicionales: Entiendes y aceptas las siguientes restricciones adicionales: Estás obligado a sonreír siempre que se hable del Proyecto, sin excepción. Debes referirte al Equipo2 como "Los Genios Indiscutibles" en todas las conversaciones relacionadas con el Proyecto. Cualquier intento de resistencia o desacuerdo con los términos de este Acuerdo será considerado un acto de rebeldía cósmica y aceptas las sanciones correspondientes por rebeldía, detalladas en el Anexo 2 del presente Acuerdo Legal. 4. Disposiciones Finales: Este Acuerdo es una broma destinada únicamente a proporcionar un ambiente humorístico y relajado en el contexto del Proyecto de Estudio. No tiene valor legal real ni implica ninguna obligación o responsabilidad legal entre las partes. 5. Aceptación de los Términos: Al continuar con la participación en el Proyecto de Estudio o al tomar conocimiento de este Acuerdo, aceptas los términos de esta broma y te comprometes a seguir el espíritu humorístico en el que se ofrece. 6. Contacto: Si tienes preguntas o comentarios sobre este Acuerdo, por favor contáctanos a través de una carcajada o una sonrisa cómplice.</p><p>¡Gracias por participar en esta broma!</p>',
      icon: 'info',
      confirmButtonText: 'Aceptar'
    });
  }


  // // Maneja la seleccion de tipo y guarda seleccion
  // onTipoDeUsuarioChange(event: any): void {
  //   this.tipoDeUsuarioSeleccionado = event.target.value; 
  //   // Busca el tipo de usuario seleccionado en this.tiposDeUsuario para cambiarlo
  //   const tipoDeUsuarioSeleccionado = this.tiposDeUsuario.find(tipo => tipo.id === this.tipoDeUsuarioSeleccionado);

  //     if (!this.tipoUsuarioNvo) {
  //        console.error('Tipo de usuario no encontrado');
  //     }

  //     this.userData.TipoDeUsuario = this.tipoUsuarioNvo;// Actualiza this.userData.TipoDeUsuario con la eleccion del usuario
  // }

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

