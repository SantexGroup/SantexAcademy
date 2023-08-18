import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit
{
  @Output() newItemEvent = new EventEmitter<boolean>();
  @Input() estado: boolean | undefined;

  constructor(private apiService: ApiService) { }

  model: User = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }
  ngOnInit(): void
  {
  }

  changeEstado(): void
  {
    if (this.estado)
    {
      this.newItemEvent.emit(false);
      console.log(false);
    } else
    {
      this.newItemEvent.emit(true);
      console.log(true);
    }
  }

  signUp(form: NgForm): void
  {
    const body = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      password: form.value.password,
    }


    this.apiService.post<any>('/users/signup', body).subscribe({
      next: (response) =>
      {
        console.log(response)
      },
      error: (error) =>
      {
        console.error(error)
        console.log(`email: ${body.email} and password: ${body.password}`)
      },
      complete: () => console.log(`email: ${body.email} and password: ${body.password}`)
    })
  }
}
