import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  rol: any[] = ["Administrador" , "Encuestador"];

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private _usuarioService:UsuarioService,
              private router: Router,
              private _snackBar: MatSnackBar) { 
    this.form= this.fb.group({
      nombre:["", Validators.required],
      apellido:["", Validators.required],
      usuario:["", Validators.required],
      password:["", Validators.required],
      email:["", Validators.required],
      rol:["", Validators.required],
      telefono:["", Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarUsuario(){

    const user: Usuario={
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      usuario: this.form.value.usuario,
      password: this.form.value.password,
      email: this.form.value.email,
      rol: this.form.value.rol,
      telefono: this.form.value.telefono
    }


    this._usuarioService.agregarUsuario(user);
    this.router.navigate(['/dashboard/usuarios']);


    this._snackBar.open("El usuario fue agregado con éxito!", "" ,{
      duration:1500,
      horizontalPosition:"center",
      verticalPosition:"bottom"
    })
  }


}
