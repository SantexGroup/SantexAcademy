import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-inscr-courses',
  templateUrl: './form-inscr-courses.component.html',
  styleUrls: ['./form-inscr-courses.component.scss']
})
export class FormInscrCoursesComponent {

    
  userForm = this.fb.group({
    firstName: ['', Validators.required ],
    lastName: [''],
    idCard: [''],
    birthdate: [''],
    email: [''],
    phone: [''],
    course: [''],
    schedule: ['']
  })
  constructor(private fb: FormBuilder){}

  addUser(){
    console.log(this.userForm.value)
  }
}
