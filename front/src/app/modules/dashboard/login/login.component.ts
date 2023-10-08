import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

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

  constructor(private userServ: UserService) { }
  
  ingresarUs () {
    this.userServ.login(this.myForm.value).subscribe(
      (res) => {
        // if(res.token){ esto es si tenemos jwt
        //   localStorage.setItem('token', res.token);
        //   localStorage.setItem('user', JSON.stringify(res.user));
        // }
        if(res.user){
          localStorage.setItem('user', JSON.stringify(res.user));
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
