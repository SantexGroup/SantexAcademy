import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormCheckService {

  formCheck: BehaviorSubject<boolean>

  constructor() { 

    this.formCheck = new BehaviorSubject<boolean>(false);

  }

  changeStatus(form: FormGroup){
    if(form.dirty){
      this.formCheck.next(true);
    }
  }

  hasChanges(changed:boolean){
    this.formCheck.next(changed)
  }
  
  getFormStatus(){
    return this.formCheck.asObservable()
  }

}
