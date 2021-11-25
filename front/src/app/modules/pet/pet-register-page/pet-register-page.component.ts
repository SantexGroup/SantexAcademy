import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Breed } from 'src/app/core/interfaces/breeds/breeds.interface';
import {
  Pet,
  MIN_PETNAME_LENGTH,
  MAX_PETNAME_LENGTH,
} from 'src/app/core/interfaces/pets/pets.interface';
import { PetService } from 'src/app/core/services/pet/pet.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';
import { MatSnackBarRef, TextOnlySnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-pet-register-page',
  templateUrl: './pet-register-page.component.html',
  styleUrls: ['./pet-register-page.component.scss'],
})
export class PetRegisterPageComponent implements OnInit {
  public minDate: Date = new Date('1996/01/01');
  public ToDAyDate: Date = new Date();

  public registerForm = this.formBuilder.group({});
  formSubscriptions: Subscription = new Subscription();
  breedList: Breed[] = [];
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private petService: PetService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.petService.getAllBreeds().subscribe((res: Breed[]) => {
      this.breedList = res;
    })

    this.registerForm = this.formBuilder.group({
      name: new FormControl(
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(MIN_PETNAME_LENGTH),
          Validators.maxLength(MAX_PETNAME_LENGTH),
        ])
      ),
      breedId: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [
        Validators.required,
        Validators.maxLength(1),
      ]),
      birth_date: new FormControl(null, [Validators.required]),
    });
  }

  get name() {
    return this.registerForm.get('name');
  }
  get breedId() {
    return this.registerForm.get('breedId');
  }
  get gender() {
    return this.registerForm.get('gender');
  }
  get birth_date() {
    return this.registerForm.get('birth_date');
  }

  register() {
    const newPetData: Pet = this.registerForm?.value;
    this.loading = true;
    this.formSubscriptions.add(
      this.petService
        .createPet(newPetData)
        .subscribe(
          (res: any) => {
            this.toastService.presentToast(`${res.name} registrado exitosamente`);
            setTimeout(() => {
              this.router.navigateByUrl('/pet/list');
            }, 600);
          },
          (err) => {

            let msg: string = err.error
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
