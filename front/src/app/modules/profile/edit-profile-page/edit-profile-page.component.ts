import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/core/services/user/user.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import {
  MIN_NAME_LASTNAME_LENGTH,
  MAX_NAME_LASTNAME_LENGTH,
  User,
} from 'src/app/core/interfaces/users/users.interface';
import { Router } from '@angular/router';
import { MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-profile-page',
  templateUrl: './edit-profile-page.component.html',
  styleUrls: ['./edit-profile-page.component.scss'],
})
export class EditProfilePageComponent implements OnInit {
  public editForm = this.formBuilder.group({});
  formSubscriptions: Subscription = new Subscription();  
  profile!: User;
  submitAttempt: boolean = false;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastService: ToastService,
    private router: Router
  ) {    
  }

  ngOnInit(): void {
    this.initForm();
    if (this.userService.loggedUser) {
      this.profile = this.userService.loggedUser;
      this.editForm.patchValue(this.profile);
    } else {
      this.userService.getProfile().subscribe((profile: User) => {
        this.profile = profile;
        this.editForm.patchValue(this.profile);
      })
    }
  }

  initForm(): void {
    this.editForm = this.formBuilder.group({
      lastname: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(MIN_NAME_LASTNAME_LENGTH),
          Validators.maxLength(MAX_NAME_LASTNAME_LENGTH),
        ])
      ),
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(MIN_NAME_LASTNAME_LENGTH),
        Validators.maxLength(MAX_NAME_LASTNAME_LENGTH),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      cuil: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]{11}$'),
      ]),
      address: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(60),
      ]),
      phone_number: new FormControl(null, [Validators.pattern('^[0-9]*$')]),
    });
  }

  // Accesores
  // ----------
  get lastname() {
    return this.editForm.get('lastname');
  }
  
  get name() {
    return this.editForm.get('name');
  }
  
  get email() {
    return this.editForm.get('email');
  }
    
  get cuil() {
    return this.editForm.get('cuil');
  }

  get address() {
    return this.editForm.get('address');
  }
  
  get phone_number() {
    return this.editForm.get('phone_number');
  }

  checkSubmit(): void {
    if(this.editForm.invalid) {
      this.submitAttempt = true;
    } else {
      this.updateUser();
    }
  }
  
  /**
   * Actualiza los datos del Usuario logueado
   */
  updateUser(): void {
    const editUserData: User = {
      ...this.editForm.value,
    }
    this.loading = true;
    this.formSubscriptions.add(
      this.userService
        .editProfile(this.profile.id, editUserData).subscribe(
          (user: User) => {
            this.userService.setUser(user);
            this.toastService.presentToast(
              `Datos de ${user.username} actualizados exitosamente`
            );
            setTimeout(() => {
              this.router.navigateByUrl('/profile');
            }, 600);
          },
          (err) => {
            let msg: string;
            let errToast: MatSnackBarRef<TextOnlySnackBar>;
            if (err.status === 400) {
              msg = err.error.errors[0].msg;
            } else {
              msg = err.error
            }
            errToast = this.toastService.presentError(msg);
            errToast.afterDismissed().subscribe(() => {
              this.queryComplete();
            })
          }
        )
      );
  }

  /**
   * Setea loading en false (para ocultar barra de progreso)
   */
  private queryComplete(): void {
    setTimeout(() => (this.loading = false), 600);
  }

  ngOnDestroy(): void {
    this.formSubscriptions.unsubscribe();
  }
  
}
