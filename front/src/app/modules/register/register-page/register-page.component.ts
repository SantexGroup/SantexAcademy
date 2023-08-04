import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {  }

  myForm = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  })
  
  submit(myForm: FormGroup) {
    console.log("submit", myForm);
  }
}
