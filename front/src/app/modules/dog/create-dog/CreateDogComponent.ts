import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MAX_NAME_LENGTH, MAX_RACE_LENGTH, MIN_NAME_LENGTH, MIN_RACE_LENGTH } from 'src/app/core/interfaces/dog/dog.interface';
import { DogService } from 'src/app/core/services/dog/dog.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';




@Component({
  selector: 'app-create-dog',
  templateUrl: './create-dog.component.html',
  styleUrls: ['./create-dog.component.scss']
})
export class CreateDogComponent implements OnInit, OnDestroy {
  public dogForm = this.formBuilder.group({ commodity: [null] });
  formSubscritions: Subscription = new Subscription();


 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dogService: DogService,
    private toastService: ToastService,
  ) {
  }


  ngOnInit(): void {
    this.createDogForm();
  }

 

  private createDogForm() {
    this.dogForm = this.formBuilder.group({
      nombreDog: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(MIN_NAME_LENGTH),
        Validators.maxLength(MAX_NAME_LENGTH)
      ])),
      raza: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.minLength(MIN_RACE_LENGTH),
        Validators.maxLength(MAX_RACE_LENGTH)
      ])),
      sexo: new FormControl(null, Validators.compose([
        Validators.required,
        
      ])),
      fechaNacimiento: new FormControl(null, Validators.compose([
        Validators.required,
        
      ]))
    });
  }

  public registerDog(): void {
    const registerDogData = this.dogForm?.value;
    this.formSubscritions.add(
      this.dogService.registerDog(registerDogData.nombreDog, registerDogData.raza, registerDogData.sexo, registerDogData.fechaNacimiento)
        .subscribe(
          (res: any) => {
            this.toastService.presentToast('Perro registrado con exito');
            this.router.navigateByUrl('/dashboard');
            
          },
          (err) => {
            this.toastService.presentToast(err.error);
          }
        )
    );
  }

  ngOnDestroy(): void {
    
  }

}
