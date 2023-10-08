import { Component, Input } from '@angular/core';
import { VolunteerService } from '../../../services/volunteer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { selectToken } from 'src/app/core/auth.selectors';

@Component({
  selector: 'app-data-volunteer',
  templateUrl: './data-volunteer.component.html',
  styleUrls: ['./data-volunteer.component.css'],
})
export class DataVolunteerComponent {
  @Input() dataVolunteer: any = {};

  tokenUser: string = '';
  editData: boolean = false;
  fullNameUser: string = '';
  userForm: FormGroup;
  onModalQuestion: boolean = false;

  onModalStatus: boolean = false;
  statusModal: string = '';
  textBtnModalStatus: string = '';
  textMessage: string = '';

  constructor(
    private volServices: VolunteerService,
    private formBuilder: FormBuilder,
    private store: Store
  ) {
    this.userForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(?:\d{7,14}|\d{2}[ -]?\d{4}[ -]?\d{4})$/),
        ],
      ],
    });
  }

  activeEditProfile() {
    this.userForm.setValue({
      fullName: this.dataVolunteer.fullName,
      email: this.dataVolunteer.email,
      phone: this.dataVolunteer.phone,
      // password: '',
    });
    this.editData = true;
  }

  inactiveEditProfile() {
    this.userForm.setValue({
      fullName: '',
      email: '',
      phone: '',
      // password: '',
    });
    this.editData = false;
  }

  saveDataProfile() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      if (userData) {
        this.store.select(selectToken).subscribe((token) => {
          if (token) {
            this.volServices.updateProfileVolunteer(userData, token).subscribe({
              next: (res) => {
                if (res) {
                  this.onModalStatus = true;
                  this.statusModal = 'success';
                  this.textMessage =
                    ' ¡Tus datos se han modificado correctamente!';

                  setTimeout(() => {
                    this.onModalStatus = false;
                    window.location.reload();
                  }, 3000);
                }
              },
              error: (err) => {
                console.log('error when editing the user', err);
                this.onModalStatus = true;
                this.statusModal = 'failed';
                this.textBtnModalStatus = 'Aceptar';
                this.textMessage =
                  '¡Se produjo un error al modificar tus datos! Por favor, inténtalo de nuevo más tarde.';
              },
            });
          }
          this.editData = false;
        });
      }
    }
  }

  handleProfileDelete() {
    this.onModalQuestion = !this.onModalQuestion;
  }

  deleteProfile() {
    this.store.select(selectToken).subscribe((token) => {
      if (token) {
        this.volServices.deleteProfileVolunteer(token).subscribe({
          next: (res) => {},
          error: (err) => {
            console.log('error deleting user', err);
          },
          complete: () => {},
        });
      }
    });
  }

  closeModalStatus() {
    this.onModalStatus = false;
  }
}
