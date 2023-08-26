import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserLogin } from '../../interfaces/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  async login() {
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    const user: UserLogin = {
      username: this.form.value.username,
      password: this.form.value.password
    }

    try {
      const response = await this.authService.login(user);
      localStorage.setItem('token', response.token);
      this.router.navigate(['/dashboard']);
    } catch (error) {
      this.error();
      this.form.reset();
      this.loading = false;
    }
  }

  error() {
    this._snackBar.open('Usuario o contraseña inválidos!', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
