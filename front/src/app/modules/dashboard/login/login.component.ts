import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private userServ: UserService) { }
  
  ingresarUs () {
    this.userServ.login(this.myForm.value).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }

  ngOnInit(): void {
  }

}
