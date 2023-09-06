import { Component } from '@angular/core';

@Component({
  selector: 'app-data-volunteer',
  templateUrl: './data-volunteer.component.html',
  styleUrls: ['./data-volunteer.component.css'],
})
export class DataVolunteerComponent {
  fullName: string = 'Exe Dev';
  phone: string = '+54 345 4076854';
  email: string = 'exedevcoding22@gmail.com';
  password: string = 'root';
  editData: boolean = false;

  newValues: { [key: string]: string } = {
    fullName: '',
    phone: '',
    email: '',
    password: '',
  };

  activeEditProfile() {
    this.editData = true;
  }

  saveDataProfile() {
    this.fullName = this.newValues['fullName'] || this.fullName;
    this.phone = this.newValues['phone'] || this.phone;
    this.email = this.newValues['email'] || this.email;
    this.password = this.newValues['password'] || this.password;
    this.editData = false;
  }

  captureData(fieldName: string, event: any) {
    this.newValues[fieldName] = event.target.value;
  }
}
