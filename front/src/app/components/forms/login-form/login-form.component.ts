import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit
{
  @Output() newItemEvent = new EventEmitter<boolean>();
  @Input() estado: boolean | undefined;

  constructor(private apiService: ApiService) { }

  model: User = {
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
    } else
    {
      this.newItemEvent.emit(true);
    }
  }

  logIn(form: NgForm): void
  {
    const body = {
      email: form.value.email,
      password: form.value.password,
    }


    this.apiService.post<any>('/users/login', body).subscribe({
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
