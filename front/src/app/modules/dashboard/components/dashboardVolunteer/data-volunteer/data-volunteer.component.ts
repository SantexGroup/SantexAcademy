import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { DashboardServicesService } from '../../../services/dashboard-services.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-volunteer',
  templateUrl: './data-volunteer.component.html',
  styleUrls: ['./data-volunteer.component.css'],
})
export class DataVolunteerComponent implements OnInit {
  @Input() dataVolunteer: any = {};

  tokenUser: string = '';
  editData: boolean = false;
  fullNameUser: string = '';
  userForm: FormGroup;
  onModalQuestion: boolean = false;

  onModalStatus: boolean = false;
  statusModal: string = '';
  textBtnModalStatus: string = '';

  constructor(
    private authService: AuthService,
    private dashServices: DashboardServicesService,
    private formBuilder: FormBuilder,
    private router: Router
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
      // password: [
      //   '',
      //   [
      //     Validators.required,
      //     Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/),
      //   ],
      // ],
    });
  }

  ngOnInit(): void {
    this.tokenUser = this.authService.getAuthToken();
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
      this.dashServices
        .updateProfileVolunteer(userData, this.tokenUser)
        .subscribe({
          next: (res) => {
            if (res) {
              this.onModalStatus = true;
              this.statusModal = 'success';

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
          },
        });
    }
    this.editData = false;
  }

  handdleProfileDelete() {
    if (this.onModalQuestion) {
      this.onModalQuestion = false;
    } else {
      this.onModalQuestion = true;
    }
  }

  deleteProfile() {
    this.dashServices.deleteProfileVolunteer(this.tokenUser).subscribe({
      next: (res) => {
        if (res) {
          this.authService.clearAuthToken();
          this.router.navigate(['']);
        }
      },
      error: (err) => {
        console.log('error deleting user', err);
      },
    });
  }

  closeModalStatus() {
    this.onModalStatus = false;
  }
}
