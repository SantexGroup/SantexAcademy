import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { userInterface } from 'src/app/core/interfaces/user.interface';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';
import { UserService } from 'src/app/core/services/usuario.service';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})

export class PersonalComponent implements OnInit {
  mensajeError: string = "";
  user = {} as userInterface;
  personalForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public userData: UserDataService,
    public views: NavBarService
  ) { 
    this.personalForm = this.fb.group({ 
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      bornDate: null,
      pictureLink: [''],
    })
  }

  ngOnInit() {

    this.userData.checkForm = false;

    this.views.title = "Datos Personales";

    this.getUser()

  }

    // * Forumulario de datos personales
  getUser() { 
    this.userService.getUser(this.userData.userId).subscribe({
      next: (data) => { console.log (data)
        this.personalForm.patchValue({
          firstName: data.name,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          bornDate: data.bornDate,
          pictureLink: data.pictureLink
        })
        this.user = data; 
      },
      error: (err) => { 
        console.log(err); 
        this.mensajeError = err;
      },
      complete: () => { 
        console.log("Done") 
      }
    })
  }
  
  updateUser(personalForm: FormGroup){ 
    //** ???
    this.user.nick = ' ';
    this.user.name = personalForm.get('firstName')?.value;
    this.user.lastName = personalForm.get('lastName')?.value;
    
    //* Se verifica si el correo fue cambiado o no
    if (personalForm.get('email')?.value === this.user.email) {
      this.user.email = ' ';
    } else { this.user.email = personalForm.get('email')?.value; }
    
    //this.user.email = personalForm.get('email')?.value;
    this.user.phone = personalForm.get('phone')?.value;
    this.user.bornDate = personalForm.get('bornDate')?.value;
    this.user.pictureLink = personalForm.get('pictureLink')?.value;

    this.userService.updateUser(this.userData.userId, this.user).subscribe({
      next: (data) => { console.log (data) },
      error: (err) => { 
        console.log(err); 
        this.mensajeError = err;
      },
      complete: () => {
        console.log("Done") 
      }
    })
  }  
}
