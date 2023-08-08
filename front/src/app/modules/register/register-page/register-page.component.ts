import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  mensajeError: string = "";

  constructor(private fb: FormBuilder, private router: Router, private registerService: RegisterService) { }

  ngOnInit(): void { }

  get email() {
    return this.registerForm.controls.email;
  }

  get password() {  
    return this.registerForm.controls.password;
  }


  registerForm = this.fb.group({
    email: ['', [ Validators.required, Validators.email ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
  })
  
  submit(myForm: FormGroup) {
    if(myForm.status == 'VALID') {
      this.registerService.register(myForm.value).subscribe({
        next: (data) => { console.log(data); }, 
        error: (err) => { 
          console.log(err); 
          this.mensajeError = err;
        },
        complete: () => { 
          console.log("Done") 
          this.router.navigateByUrl('/dashboard');
        }
      });
    }
  }
}
