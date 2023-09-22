import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'

import { User } from '../../interface/user.interface';
import { UsersService } from '../../services/users.service';
import { TipoDeUsuario } from '../../interface/tipodeusuario.interface';
import { TiposDeUsuarioService } from '../../services/tiposdeusuarioservice';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form:FormGroup;
  
  tipoUsuarioNvo: TipoDeUsuario = {
    nombre: 'Vacio',
    descripcion: 'Vacio'
  };

  user: User = {
    username: '',
    password: '',
    apellido: '',
    nombre: '',
    email: '',
    estado: 'A',
    confirmPassword: '',
    idtipodeusuario: 0,
    activoactualmente: true,
    createdAt: new Date,
    updatedAt: new Date,
    TipoDeUsuario: this.tipoUsuarioNvo,
    verificationCode: false,
    codeRegister: ''
  }

  tipoDeUsuarioSeleccionado: number | undefined = undefined;
  tiposDeUsuario: TipoDeUsuario[] = [];
  
  constructor(private formBuilder: FormBuilder,
              private usersService: UsersService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private tipoDeUsuarioService: TiposDeUsuarioService,) 
    { 
      this.form= this.formBuilder.group(
          {
            nombre:['', [Validators.required]],
            apellido:['', [Validators.required]],
            username:['', [Validators.required]],
            password:['',[Validators.required, Validators.minLength(8)]],
            //confirmPassword:['',[Validators.required]],
            email:['', [Validators.required, Validators.email]],
            //agreeTerms:['',[Validators.required]],
            userType: ['Seleccione', [Validators.required, this.validateUserType]] // Validación de tipo de usuario
          }
          )
    }

  // Función para validar selección de tipo de usuario // Llevar a Services o Middleware o Directivas
  validateUserType(control: any) {
    if (control.value === 'Seleccione') {
      return { invalidUserType: true };
    }
    return null;
  }

  ngOnInit(): void {
    this.tipoDeUsuarioService.getTiposDeUsuario().subscribe((data: TipoDeUsuario[]) => {
      this.tiposDeUsuario = data;
      this.tipoDeUsuarioSeleccionado = undefined;
      console.log(this.tiposDeUsuario);
    });

    if( !this.router.url.includes('edit') ) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.usersService.getUserPorId( id ))
      )
      .subscribe((user) => {
        this.user = user;
        this.tipoDeUsuarioSeleccionado = user.idtipodeusuario;})
  }

  onTipoDeUsuarioChange(event: any): void {
    this.tipoDeUsuarioSeleccionado = event.target.value; 
  }

  onEnviar(event: Event, usuario: User): void {
    event.preventDefault();
    const userType = this.form.get('userType')?.value;
    
    if (this.form.valid) {
      if (this.tipoDeUsuarioSeleccionado !== undefined) {
        this.user.idtipodeusuario = this.tipoDeUsuarioSeleccionado;
        if (this.user.id) {
          // Editar usuario existente
          this.usersService.editUser(this.user)
            .subscribe(
              user => {
                console.log('Usuario editado:', user);
                this.router.navigate(['/users/index']);
              },
              error => {
                console.error('Error al editar usuario:', error);
              }
            );
        } else {
          // Agregar nuevo usuario
          this.usersService.addUser(this.user)
            .subscribe(
              user => {
                console.log('Usuario agregado:', user);
                this.router.navigate(['/users/index']);
              },
              error => {
                console.error('Error al agregar usuario:', error);
              }
            );
        }
      } else {
        console.error('El tipo de usuario seleccionado es undefined.');
      } 
    } else {
      this.form.markAllAsTouched();
      console.error('Formulario inválido. Por favor, complete todos los campos correctamente.');
    }
  }
  
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
