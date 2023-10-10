import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/core/interfaces/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string =''
  myForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  actualUser : User | undefined;
  constructor(private userServ: UserService, private router: Router) { }
  
  ingresarUs () {
    this.userServ.login(this.myForm.value).subscribe(
      (res) => {
        // if(res.token){ esto es si tenemos jwt
        //   localStorage.setItem('token', res.token);
        //   localStorage.setItem('user', JSON.stringify(res.user));
        // }
        if(res.user){
          localStorage.setItem('user', JSON.stringify(res.user));
          this.router.navigate([this.userServ.getPreviousUrl() || ['/']]);
        }else{
          this.error = "error en la solicitud"
        }
      },
      (error) => {
        this.error = error.error.msg + ", intente nuevamente"; // Manejo de errores de solicitud
      }
    )
  }

  ngOnInit(): void {
  }

}
