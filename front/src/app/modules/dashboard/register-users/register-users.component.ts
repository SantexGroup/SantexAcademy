import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css'],
})
export class RegisterUsersComponent implements OnInit {
  myForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  newUser!: User;
  registered: boolean = false;
  constructor(private userServ: UserService, private router: Router) {
    this.registered = false;
  }

  registrarUs() {
    // procedimieto de Ingreso
    this.userServ.register(this.myForm.value).subscribe((res) => {
      this.newUser = res.user;
      if (this.newUser) {
        console.log(this.newUser)
        this.registered = true;
      }
    });
  }

  ngOnInit(): void {}

  closePopup() {
    // redirigir a anterior url
    this.router.navigateByUrl(this.userServ.getPreviousUrl());
  }
}
