import { HostListener } from '@angular/core';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormRevisionService {

  formStatus: BehaviorSubject<boolean>

  constructor() { 
    this.formStatus = new BehaviorSubject<boolean>(false);
  }

  @HostListener('window:beforeunload', ['$event'])
  checkForm($event: BeforeUnloadEvent): void {
    if (this.formStatus) {
      $event.returnValue = '¡Atención! Los datos no guardados se perderán. ¿Confirma?';
    }
  }

  isFormEmpty(form: FormGroup): boolean {
    for (const controlName in form.controls) {
      if (form.controls.hasOwnProperty(controlName)) {
        const control = form.controls[controlName];
        if (control.value !== null && control.value !== '') {
          return false; 
        }
      }
    }
    return true;
  }

  markForm(form: FormGroup){

    if(this.isFormEmpty(form)){
      this.formStatus.next(false);
    }

    if(form.dirty){
      this.formStatus.next(true);
    }
    
    return this.formStatus.asObservable();
  }
}
