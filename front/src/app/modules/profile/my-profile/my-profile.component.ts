import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  form: FormGroup;  
  userData: any = {}
  token: string | null 
  idUser: number=0;
  userEdit: User = {
    id: 0,
    firstName:"",
    lastName:'',
    email:'',
    phone: '',
    password:'',
    active: true,
    admin:false,
    Registereds:[{id: 0, idCourse: 0, idUser: 0}] 

  }
  

  constructor(private userService: UserService, private fb: FormBuilder,) {
    this.token =  localStorage.getItem('token');
    this.getUserToken();

    this.form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', Validators.required],
    })
  }
   

  ngOnInit(): void {
  }

  getUserToken(){
    if(this.token){try {
      const payload = JSON.parse(atob(this.token.split('.')[1]));
      this.userData.email= payload.email
      this.userService.getUserByEmail(this.userData.email).subscribe((data) => {
        this.userData = data;
        this.idUser=this.userData.id;
        this.form.setValue({
          firstName: this.userData.firstName,
          lastName: this.userData.lastName,
          phone:this.userData.phone
        })
      },
      (error) => {
        console.log(error);
      })
      
    } catch (error) {
      console.error(error)
    }

    }
    
  }

  isEditing: boolean = false;
  buttonEdit: boolean=true;

  editUser() {
    this.isEditing = true;
    this.buttonEdit= false;
  }

  putUser() {
    this.userEdit = {
      id:0,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.userData.email,
      phone: this.form.value.phone,
      password: this.userData.password,
      active: this.userData.active,
      admin:this.userData.admin,
      Registereds:[{id: 0, idCourse: 0, idUser: 0}]
    }
    this.userService.putUser(this.userEdit,this.idUser).subscribe(
      (data) => {
        window.location.reload();
      },
      (error) => {
        console.log(error);
      }
    );

  }

  cancelEdit(){
    this.form.patchValue({
      firstName: this.userData.firstName,
      lastName: this.userData.lastName,
      phone:this.userData.phone
    });
    this.isEditing = false;
    this.buttonEdit= true;
  }

}
