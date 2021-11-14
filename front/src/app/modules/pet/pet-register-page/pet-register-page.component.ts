import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pet } from 'src/app/core/interfaces/pets/pets.interface';

import { PetService } from 'src/app/core/services/pet/pet.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';


@Component({
  selector: 'app-pet-register-page',
  templateUrl: './pet-register-page.component.html',
  styleUrls: ['./pet-register-page.component.scss']
})
export class PetRegisterPageComponent implements OnInit {
  public minDate : Date = new Date('2006/01/01');
  public ToDAyDate : Date = new Date();

  public registerForm = this.formBuilder.group({});
  formSubscriptions: Subscription = new Subscription();
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    //aca va mi sevicio
    private petService: PetService,
    private toastService: ToastService,
    
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            
          ])
        ),
        breed: new FormControl(null, [
          Validators.required,
          
        ]),
        gender: new FormControl(null, [
          Validators.required,
          
        ]),
        birth_date: new FormControl(null, [
          Validators.required,
        ])
      },
      
    );
  }

  get name(){
    return this.registerForm.get('name');
  }
  get breed(){
    return this.registerForm.get('breed');
  }
  get gender(){
    return this.registerForm.get('gender');
  }
  get birth_date(){
    return this.registerForm.get('birth_date');
  }

  register() {    
    const newPetData : Pet = this.registerForm?.value;
    this.loading = true;
    this.formSubscriptions.add(
      this.petService
          //aca tengo que pasarle los tipos de datos que correspondan con el back
        .createPet(newPetData.name ,newPetData.breed, newPetData.gender,newPetData.birth_date)
        .subscribe(
          (res: any) => {            
            this.toastService.presentToast(`Registro a ${res.petName} exitosamente`); 
            setTimeout(() => {
              this.router.navigateByUrl('/');
            }, 600);
          },
          (err) => {
            //??? aca deberia venir el error desde el back?
            this.toastService.presentToast(err.error);
            this.queryComplete();
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
