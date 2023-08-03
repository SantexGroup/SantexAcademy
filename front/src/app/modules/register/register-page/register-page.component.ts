import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
/*   myForm = new FormGroup({
    email: new FormControl("");
    password: new FormControl("");
  });
 */

  myForm = this.fb.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required, Validators.minLength(6)]
  })
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {  }
}
