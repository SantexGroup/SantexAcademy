import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-create-new-code',
  templateUrl: './create-new-code.component.html',
  styleUrls: ['./create-new-code.component.css']
})
export class CreateNewCodeComponent{
  form: FormGroup;
  datos: {}={
    email:""
  }
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.form = this.fb.group({
      email: ['', Validators.required]
    });
    this.form.setValue({
      email:""
    })
   }
 createCode(){
  this.datos= {
    email: this.form.value.email
  } 
 }

}
