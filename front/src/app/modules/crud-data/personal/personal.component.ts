import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';
import { UserService } from 'src/app/core/services/usuario.service';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})

export class PersonalComponent implements OnInit {
  mensajeError: string = "";

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
          lastName: data.lastName
          
        }

        )
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


}
