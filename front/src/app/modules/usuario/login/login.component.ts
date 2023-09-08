import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  mensajeError: string = "";
  
  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private userService: UsuarioService,
    public dataUser: UserDataService,
    private views: NavBarService
    ) { }

  get nick() {
    return this.loginForm.controls.nick;
  }

  get password() {  
    return this.loginForm.controls.password;
  }

  loginForm = this.fb.group({
    nick: ['', [ Validators.required ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  })
  
  submit(myForm: FormGroup) {
    if(myForm.status == 'VALID') {
      this.userService.login(myForm.value).subscribe({
        next: (data) => { console.log(data);
        this.dataUser.userId = data.profile.userId;
        this.dataUser.profileId = data.profile.id;
        this.views.quickButton = true;
        this.views.accountButton = false;
        this.views.title = ("Bienvenido! " + data.user.name + " " + data.user.lastName);
        this.router.navigate(['/home', data.profile.id]);
        }, 
        error: (err) => { 
          console.log(err); 
          this.mensajeError = err;
        },
        complete: () => { 
          console.log("Done") 
        }
      });
    }
  }

}
