import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

  isEditing: boolean = false;

  editUser() {
    this.isEditing = true;
  }

  saveUser() {
    // Lógica para guardar los cambios del usuario
    this.isEditing = false;
  }

  cancelEdit(){
    this.isEditing = false;
  }

}
