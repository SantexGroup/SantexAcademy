import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetURLdataService } from 'src/app/core/services/toolServices/get-urldata.service';
import { UsuarioService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mensajeError: string = "";
  
  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private userService: UsuarioService,
    public dataUrl: GetURLdataService
    ) { }

  ngOnInit(): void {
    this.dataUrl.getRoute();
  }

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
        this.dataUrl.title = ("Bienvenido! " + data.user.name + " " + data.user.lastName);
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
