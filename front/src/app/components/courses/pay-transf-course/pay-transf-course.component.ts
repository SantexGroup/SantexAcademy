import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-transf-course',
  templateUrl: './pay-transf-course.component.html',
  styleUrls: ['./pay-transf-course.component.scss']
})
export class PayTransfCourseComponent {
  transferOption: string = 'si';
  formPay: any
  constructor(private fb: FormBuilder, 
              private router: Router) {
    this.formPay = this.fb.group({
      cuit: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(3)]],
      date: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      check: ['', [Validators.required]]
    })
  }

  get cuit() {
    return this.formPay.get('cuit')
  }
  get name() {
    return this.formPay.get('name')
  }
  get date() {
    return this.formPay.get('date')
  }
  get amount() {
    return this.formPay.get('amount')
  }
  get check() {
    return this.formPay.get('check')
  }

  validationMock() {
    if(this.transferOption === 'si'){
      this.router.navigate(['/success']);
    }else{
      this.router.navigate(['/unsuccessfully']);
    }
  }
  sendTransfer() {
    console.log(this.formPay.value)
    this.validationMock()
    if(this.formPay.valid){
      console.log(this.formPay.value)
    }else{
      alert('llenar los campo')
    }
  }



}
