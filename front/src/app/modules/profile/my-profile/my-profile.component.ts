import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  userPrueba: any = {
    firstname: 'Carlos',
    lastname: 'Juarez',
    phone: '123456789',
    email: 'cj@mail.com'
  };
  user: any;
  token: string | null = localStorage.getItem('token')

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  getUserToken(){
    //let idToken = JSON.parse(atob(this.token.split('.')[1]));
  }

  isEditing: boolean = false;

  editUser() {
    this.isEditing = true;
  }

  saveUser() {
    // Lógica para guardar los cambios del usuario
    //this.userService.putUser(this.user,this.idToken).subscribe()
    this.isEditing = false;
  }

  cancelEdit(){
    this.isEditing = false;
  }

}
