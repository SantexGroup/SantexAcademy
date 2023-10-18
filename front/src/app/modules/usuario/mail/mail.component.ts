import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserService } from 'src/app/core/services/usuario.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  resetForm: FormGroup

  constructor(
    public views: NavBarService,
    private fb: FormBuilder,
    private _user: UserService,
    private toastr: ToastrService
  ) { 
    this.resetForm = this.fb.group({
      email: ['', [Validators.required]]
    });
  }


  ngOnInit(): void {
    this.views.changeTitle('Reseteo de Contraseña')
  }

  sendMeEmail(){

    const email = {
      email: this.resetForm.get('email')?.value
    }
                  
    return this._user.sendEmail(email).subscribe({
      next: () => {
        this.toastr.success("Se envio correo de recuperacion")
      },
      error: () => {
        this.toastr.error("No existe usuario con ese correo")
      }
    })
  }

}
