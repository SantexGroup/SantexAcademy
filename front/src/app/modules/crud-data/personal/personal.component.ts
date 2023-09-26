import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { userInterface } from 'src/app/core/interfaces/user.interface';
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
  user = {} as userInterface;
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
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: [''],
      bornDate: null,
      pictureLink: [''],
    });

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

  //* Se carga la imagen en el frontend
  selectImage(e: any) {
    if (e.target.files[0]) {
      this.imagen = e.target.files[0];
      console.log("imagen", this.imagen) // TODO: BORRAR
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = (e: any) => {
        this.url = e.target.result
      }
    }
  }


  updateUser(personalForm: FormGroup) {
    //* Se envia la imagen a GoogleDrive
    if (this.url != this.default) {
      this.userService.uploadImage(this.imagen).subscribe({
        next: (data) => {
          this.userData.urlPicture = ("https://drive.google.com/uc?export=view&id=" + data)

          //* Se toma los datos del formulario para la actualizacion
          this.user.nick = ' ';
          this.user.name = personalForm.get('firstName')?.value;
          this.user.lastName = personalForm.get('lastName')?.value;
          this.user.phone = personalForm.get('phone')?.value;
          this.user.bornDate = personalForm.get('bornDate')?.value;

          //* Se verifica si el correo fue cambiado o no
          if (personalForm.get('email')?.value === this.user.email) {
            this.user.email = '';
          } else { this.user.email = personalForm.get('email')?.value; }

          this.user.pictureLink = this.userData.urlPicture;

          //* Se actualiza el usuario
          this.userService.updateUser(this.userData.userId, this.user).subscribe({
            next: (data) => { console.log(data) },
            error: (err) => {
              console.log(err);
              this.mensajeError = err;
            },
            complete: () => {
              console.log("Done")
            }
          })
        },
        error: (err) => {
          this.mensajeError = err;
        },
        complete: () => {
          this.toastr.success('Datos de usuario actualizados', 'DATOS PERSONALES');
        }
      })
    }
  }
}
