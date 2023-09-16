import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-transf-course',
  templateUrl: './pay-transf-course.component.html',
  styleUrls: ['./pay-transf-course.component.scss']
})
export class PayTransfCourseComponent {
  transferOption: string | null = null;// comienza sin ser seleccionado
  formPay: any
  constructor(private fb: FormBuilder, 
              private router: Router) {
    this.formPay = this.fb.group({
      cuit: ['', [Validators.required, Validators.pattern(/^[0-9\-]{13}$/)]],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]{3,}$/)]],
      date: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.pattern(/^(?:\d{5,6}(?:\.\d{2})?)?$/)]],
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
 // validacion para ir al mock
  validationMock() {
    if(this.transferOption === 'si'){
      this.router.navigate(['/success']);
      // Después de procesar, resetea el formulario
      this.formPay.reset();
    }else{
      this.router.navigate(['/unsuccessfully']);
      // Después de procesar, resetea el formulario
      this.formPay.reset();
    }
  }
  // envio los datos delformulario
  sendTransfer() {
    console.log(this.formPay.value)
    
    if(this.formPay.valid){
      this.validationMock()
      console.log('Datos de la transferencia: ',this.formPay.value)
    }else{
      alert('llenar los campo')
    }
  }
}
