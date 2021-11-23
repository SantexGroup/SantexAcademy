import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MAX_NAME_LENGTH, MAX_RACE_LENGTH, MIN_NAME_LENGTH, MIN_RACE_LENGTH } from 'src/app/core/interfaces/dog/dog.interface';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DogService } from 'src/app/core/services/dog/dog.service';
import { RazaService } from 'src/app/core/services/raza/raza.service';
import { ToastService } from 'src/app/core/services/toast/toast.service';




@Component({
  selector: 'app-create-dog',
  templateUrl: './create-dog.component.html',
  styleUrls: ['./create-dog.component.scss']
})
export class CreateDogComponent implements OnInit, OnDestroy {
  public dogForm = this.formBuilder.group({ commodity: [null] });
  public razas = 
   [
     {id: 1, raza:'Mapuche'},
     {id: 2, raza:'Pelon'}
    ];
  formSubscritions: Subscription = new Subscription();


 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dogService: DogService,
    private toastService: ToastService,
    private datePipe: DatePipe,
    private authservice: AuthService,
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
      idRaza: new FormControl(null, Validators.compose([
        Validators.required,
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
    registerDogData.fechaNacimiento=this.datePipe.transform(registerDogData.fechaNacimiento, 'dd-MM-yyyy')
    this.formSubscritions.add(
      this.dogService.registerDog(registerDogData.nombreDog, registerDogData.raza, registerDogData.sexo, registerDogData.fechaNacimiento, this.authservice.user.id )
        .subscribe(
          (res: any) => {
            this.toastService.presentToast(res.message);
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
