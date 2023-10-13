import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-sigup-view',
  templateUrl: './sigup-view.component.html',
  styleUrls: ['./sigup-view.component.css']
})
export class SigupViewComponent {
  form: FormGroup;
  registro:boolean=false;
  user: User = {
    id: 0,
    firstName:"",
    lastName:'',
    email:'',
    phone: '',
    password:'',
    active: true,
    admin:false,
    Registereds:[{id: 0, idCourse: 0, idUser: 0, User: []}]
   

  }
  constructor(private userService: UserService,private fb: FormBuilder,private router: Router,) { 
      this.form = this.fb.group({
        firstName:  ['', Validators.required],
        lastName:  ['', Validators.required],
        email:  ['', Validators.required],
        phone:  [''],
        password:  ['', Validators.required],

      })
      this.register()
  }

  createUser(){
    console.log("registrado")
    this.user = {
      id:0,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      phone: this.form.value.phone,
      password: this.form.value.password,
      active: true,
      admin:false,
      Registereds:[{id: 0, idCourse: 0, idUser: 0, User: []}]
    }

    this.userService.postUser(this.user)
    .subscribe(
      (data) => {this.registro= true;},
      (error) => {
        console.log(error);
      }
    );
  }

  register(){
    this.form.setValue({
    firstName:"",
    lastName:"",
    email:"",
    phone: "",
    password:"",
    })
  }
  
}
