import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserService } from 'src/app/core/services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { loginInterface } from 'src/app/core/interfaces/login.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private userService: UserService,
    public dataUser: UserDataService,
    public views: NavBarService,
    private toastr: ToastrService
    ) { }


  ngOnInit(): void {
    this.views.changeTitle("Iniciar Sesion");
  }

  toRegister(){
    this.router.navigate(['/registro']);
  }
  
  toMail(){
    this.router.navigate(['/mail']);
  }

  userLevel(data:loginInterface){
    if(data.user.rolesId === 2){
      this.router.navigate([`/admin`]);
    }else{
      this.router.navigate([`/home/${data.profile.userId}/cv`]);
    }

    if(data.user.rolesId === 3){
      this.dataUser.level = 3;
      this.router.navigate(['/registro']);
    }
  }

  get nick() {
    return this.loginForm.controls.nick;
  }

  get password() {  
    return this.loginForm.controls.password;
  }

  loginForm = this.fb.group({
    //TODO ELIMINAR
    nick: ['', [ Validators.required ]],
    password: ['', [ Validators.required, Validators.minLength(8)]],
  })
  
  submit(myForm: FormGroup) {
    if(myForm.status == 'VALID') {
      this.userService.login(myForm.value).subscribe({
        next: (data) => { 
        this.dataUser.userId = data.profile.userId;
        this.dataUser.profileId = data.profile.id;
        this.views.quickButton = true;
        this.views.accountButton = false;
        this.dataUser.userName = data.user.name;
        this.dataUser.lastName = data.user.lastName;
        this.dataUser.urlPicture = data.user.pictureLink;
        localStorage.setItem('accessToken', data.accessToken);
        localStorage.setItem('userName', data.user.name);
        localStorage.setItem('lastName', data.user.lastName);
        localStorage.setItem('picture', data.user.pictureLink);
        localStorage.setItem('rol', String(data.user.rolesId));
        this.views.changeTitle("Bienvenido! " + data.user.name + " " + data.user.lastName);
        this.userLevel(data);
        }, 
        error: () => { 
          this.toastr.error("Usuario o contraseña incorrectos!", "VERIFICAR DATOS");
        },
        complete: () => { 
          this.dataUser.getProfiles(); 
        }
      });
    }
  }

}
