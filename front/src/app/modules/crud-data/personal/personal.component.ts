import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  user: any = {} as userInterface;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userData: UserDataService,
    private userService: UserService
  ) { }

  ngOnInit() {
    // TODO: borra ambos console.log antes de subir
    console.log("desde personal")
    console.log(this.userData.userId)

    this.getUser()
  }


  // * Forumulario de datos personales
  personalForm = this.fb.group({ 
    firstName: [''],
    lastName: [''],
    email: [''],
    phone: ['', [Validators.maxLength(10)]],
    bornDate: [''],
    pictureLink: [''],
  })

  getUser() { 
    this.userService.getUser(this.userData.userId).subscribe({
      next: (data) => { console.log (data)
        this.personalForm.patchValue({
          firstName: data.name,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          bornDate: String(data.bornDate),
          pictureLink: data.pitureLink
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
    this.user.name = personalForm.value.firstName;
    this.user.lastName = personalForm.value.lastName;
    this.user.email = personalForm.value.email;
    this.user.phone = personalForm.value.phone;
    this.user.bornDate = new Date(personalForm.value.bornDate);
    this.user.pitureLink = personalForm.value.pictureLink;

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
