import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../services/usuario.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  rol: any[] = ["Admin" , "Encuestador"];
  form: FormGroup;
  id:number;
  
  operacion: string="Agregar";

  constructor(private fb: FormBuilder,
              private userService:UserService,
              private router: Router,
              private aRoute: ActivatedRoute,
              private _snackBar: MatSnackBar) {
                this.form = this.fb.group({
                  firstName: ['', Validators.required],
                  lastName: ['', Validators.required],
                  username: ['', Validators.required],
                  password: ['', Validators.required],
                  email: ['', [Validators.required, Validators.email]],
                  rol: ['', Validators.required],
                  phone: ['', Validators.required]
                });

                this.id= Number(this.aRoute.snapshot.paramMap.get('id'));
                
              }

  ngOnInit(): void {
    // con el valor del id capturado primero determinar si es una edicion o creacion
   if (this.id != 0){
      this.operacion= "Editar";
     this.obtenerUsuario(this.id)
    }
  }

  obtenerUsuario(id: number) {
    this.userService.getUserById(id)
      .then((user) => {
        console.log(user);
        this.form.setValue({
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          password: user.password,
          email: user.email,
          rol: user.rol,
          phone: user.phone
        });
      })
      .catch((error) => {
        console.error('Error al editar el usuario:', error);
      });
  }

  createEditUser(id:number){
    if (this.id != 0){
      this.editUser(this.id);
    }else{
      this.createUser();
    }
  }

  async editUser(id: number) {
    if (this.form.valid) {
      const userData = this.form.value;
      const token = localStorage.getItem('token');
      userData.token = token;
      userData.id = id;
      try {
        console.log(userData);
        await this.userService.updateUser(userData);
        this._snackBar.open("El usuario fue actualizada con éxito!", "", {
          duration: 1500,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
        this.router.navigate(['/dashboard/usuarios']);
      } catch (error) {
        console.error('Error al editar usuario:', error);
      }
    }
  }

  async createUser() {
    if (this.form.valid) {
      const userData = this.form.value;
      const token = localStorage.getItem('token');
      userData.token = token;
  
      try {
        await this.userService.createUser(userData);
        this._snackBar.open("El usuario fue creado con éxito!", "", {
          duration: 1500,
          horizontalPosition: "center",
          verticalPosition: "bottom"
        });
        this.router.navigate(['/dashboard/usuarios']);
      } catch (error) {
        console.error('Error al crear usuario:', error);
      }
    }
  }
  
}


