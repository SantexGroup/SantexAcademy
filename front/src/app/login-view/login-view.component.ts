import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onLogin(e:any): void {
    e.preventDefault()
    var username = (<HTMLInputElement>document.getElementById('username'));
    var password = (<HTMLInputElement>document.getElementById('password'));
    const data = {
      username: username?.value,
      password: password?.value
    }
    console.log(data)
  }
}
