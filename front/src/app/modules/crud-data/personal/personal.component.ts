import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userInterface } from 'src/app/core/interfaces/user.interface';
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
    private userData: UserDataService,
    private userService: UserService
  ) { 
    this.personalForm = this.fb.group({ 
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: ['', [Validators.maxLength(10)]],
      bornDate: '',
      pictureLink: [''],
    })
  }

  ngOnInit() {
    // TODO: borra ambos console.log antes de subir
    console.log("desde personal")
    console.log(this.userData.userId)

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
          bornDate: String(data.bornDate),
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
    this.user.name = personalForm.get('firstName')?.value;
    this.user.lastName = personalForm.get('lastName')?.value;
    this.user.email = personalForm.get('email')?.value;
    this.user.phone = personalForm.get('phone')?.value;
    this.user.bornDate = personalForm.get('bornDate')?.value;
    this.user.pictureLink = personalForm.get('pictureLink')?.value;

    console.log("formulario personal", personalForm)
    console.log("contenido user", this.user)

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
