import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/interfaces/user.interface';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';
import { UserService } from 'src/app/core/services/usuario.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})

export class PersonalComponent implements OnInit {
  mensajeError: string = "";
  user = {} as User;
  personalForm: FormGroup;
  default = 'assets/Imagenes/placeHolderImage.jpg';
  url: string = this.default;
  imagen = "";

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    public userData: UserDataService,
    public views: NavBarService,
    public toastr: ToastrService
  ) {
    this.personalForm = this.fb.group({
      name: ['', [ Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]],
      lastName: ['', [ Validators.maxLength(20), Validators.pattern('^[a-zA-Z ]*$')]],
      email: ['', [ Validators.email ]],
      phone: ['', [ Validators.maxLength(10), Validators.pattern('^[0-9]*$')]],
      bornDate: null,
      pictureLink: [''],
    });
  }

  getName() {
    return this.personalForm.controls['name'];
  }
  getLastName() {
    return this.personalForm.controls['lastName'];
  }
  getEmail() {
    return this.personalForm.controls['email'];
  }
  getPhone() {
    return this.personalForm.controls['phone'];
  }

  ngOnInit() {
    this.userData.checkForm = false;
    this.views.changeTitle("Datos Personales");
    this.getUser()
  }

  // * Forumulario de datos personales
  getUser() {
    this.userService.getUser(this.userData.userId).subscribe({
      next: (data) => {
        this.personalForm.patchValue({
          name: data.name,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
          bornDate: data.bornDate,
          pictureLink: data.pictureLink
        })
        this.url = data.pictureLink || this.default
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

  //* Se carga la imagen en el frontend
  selectImage(e: any) {
    if (e.target.files[0]) {
      this.imagen = e.target.files[0];
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (e: any) => {
        this.url = e.target.result
      }
    }
  }

  dataUserUpdate() {
    if (this.imagen) {
      this.userService.uploadImage(this.imagen).subscribe((data) => {
        this.url = data;
        this.userData.urlPicture = this.url;
        this.userUpdate();
      })
    } else {
      this.userUpdate()
    }
  }

  userUpdate() {
    const userUpdate: User = {
      name: this.personalForm.get('name')?.value,
      lastName: this.personalForm.get('lastName')?.value,
      email: this.personalForm.get('email')?.value,
      phone: this.personalForm.get('phone')?.value,
      bornDate: this.personalForm.get('bornDate')?.value,
      pictureLink: this.url || null
    }

    this.userService.updateUser(this.userData.userId, userUpdate).subscribe(() => {
      this.getUser()  
    })
  }
}