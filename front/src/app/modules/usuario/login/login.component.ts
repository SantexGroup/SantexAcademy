import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserService } from 'src/app/core/services/usuario.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private userService: UserService,
    public dataUser: UserDataService,
    public views: NavBarService,
    private toastr: ToastrService
    ) { }

  toRegister(){
    this.router.navigate(['/registro']);
  }  

  get nick() {
    return this.loginForm.controls.nick;
  }

  get password() {  
    return this.loginForm.controls.password;
  }

  loginForm = this.fb.group({
    //TODO ELIMINAR
    nick: ['javkhall7', [ Validators.required ]],
    password: ['qwerty', [ Validators.required, Validators.minLength(6) ]],
  })
  
  submit(myForm: FormGroup) {
    if(myForm.status == 'VALID') {
      this.userService.login(myForm.value).subscribe({
        next: (data) => { 
        console.log(data);
        this.dataUser.userId = data.profile.userId;
        this.dataUser.profileId = data.profile.id;
        this.views.quickButton = true;
        this.views.accountButton = false;
        this.dataUser.userName = data.user.name;
        this.dataUser.lastName = data.user.lastName;
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('userName', data.user.name);
        localStorage.setItem('lastName', data.user.lastName);
        this.views.title = ("Bienvenido! " + data.user.name + " " + data.user.lastName);
        this.router.navigate([`/home/${data.profile.userId}/cv`]);
        }, 
        error: () => { 
          this.toastr.error("Usuario o contraseña incorrectos!", "VERIFICAR DATOS");
        },
        complete: () => { 
          console.log("Done") 
        }
      });
    }
  }

}
