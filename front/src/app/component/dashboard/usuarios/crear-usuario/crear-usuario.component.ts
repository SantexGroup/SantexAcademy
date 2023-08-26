import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  rol: any[] = ["Admin" , "Encuestador"];
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private userService:UserService,
              private router: Router,
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
              }

  ngOnInit(): void {
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


