import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators'

import { User } from '../../interface/user.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form:FormGroup;
  
  user: User = {
    username: '',
    password: '',
    apellido: '',
    nombre: '',
    email: '',
    estado: true,
    confirmPassword: '',
    idtipodeusuario: '',
  }

  constructor(private formBuilder: FormBuilder,
              private usersService: UsersService,
              private activatedRoute: ActivatedRoute,
              private router: Router) 
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

    if( !this.router.url.includes('edit') ) {
      return;
    }

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.usersService.getUserPorId( id ))
      )
      .subscribe( user => this.user = user )
  }

  onEnviar(event: Event, usuario:User): void {
    event.preventDefault; 
    const userType = this.form.get('userType')?.value;
    if (this.form.valid)
    {
      if ( this.user.id ){
        // edit
        this.usersService.editUser( this.user )
          .subscribe( user => {
            console.log('edit', user)
            this.router.navigate(['/users/index' ])
           })
      }else{
        // add
        this.usersService.addUser(this.user)
          .subscribe( user => {
            console.log('add :', user)
            this.router.navigate(['/users/index' ])
          })
      }
    }
    else
    {
      this.form.markAllAsTouched(); 
    }
  };

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
