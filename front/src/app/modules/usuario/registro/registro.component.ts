import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserService } from 'src/app/core/services/usuario.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{
  mensajeError: string = "";

  constructor
  (
    private fb: FormBuilder, 
    private router: Router, 
    private userService: UserService,
    public dataUser: UserDataService, 
    public views: NavBarService,
    private toastrSrv: ToastrService
    ) { }

  ngOnInit(): void {
    this.views.changeTitle("Registrarse");
  }

  //* Getters para validar los campos del formulario
  get name() {
    return this.registroForm.controls.name;
  }

  get lastName() {
    return this.registroForm.controls.lastName;
  }

  get email() {
    return this.registroForm.controls.email;
  }

  get nick() {
    return this.registroForm.controls.nick;
  }

  get password() {  
    return this.registroForm.controls.password;
  }


  //* Formulario 
  registroForm = this.fb.group({
    name: ['', [ Validators.required ]],
    lastName: ['', [ Validators.required ]],
    email: ['', [ Validators.required, Validators.email ]],
    nick: ['', [ Validators.required ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  })
  

  //* Metodo para registrar
  submit(myForm: FormGroup) {
    console.log(myForm.value)
    if(myForm.status == 'VALID') {
      this.userService.registro(myForm.value).subscribe({
        next: (data) => { console.log(data);
        this.dataUser.profileId = data.profile.id;
        this.views.quickButton = true;
        this.views.accountButton = false;
        this.dataUser.userName = data.user.name;
        this.dataUser.lastName = data.user.lastName;
        this.dataUser.newUser = true;
        this.views.changeTitle("Bienvenido! " + data.user.name + " " + data.user.lastName);
        this.router.navigate(['/home', data.profile.userId, 'cv']) 
        }, 
        error: () => { 
         this.toastrSrv.warning('Verifica nuemante los datos', 'El registro no se puede completar') 
          
        },
        complete: () => { 
         this.toastrSrv.success("Tu usuario se registro correctamente", "Registro Correcto");  
        }
      });
    }
  }
}
