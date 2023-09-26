import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-create-new-code',
  templateUrl: './create-new-code.component.html',
  styleUrls: ['./create-new-code.component.css'],
})
export class CreateNewCodeComponent {
  finish: boolean = false;

  emailForm: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }
  createCode() {
    const emailControl = this.emailForm.get('email');
    if (emailControl) {
      const email = emailControl.value;
      this.userService.createCode(email).subscribe(
        (data) => {
          this.finish = true;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
