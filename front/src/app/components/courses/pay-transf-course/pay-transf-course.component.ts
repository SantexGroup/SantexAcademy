import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-transf-course',
  templateUrl: './pay-transf-course.component.html',
  styleUrls: ['./pay-transf-course.component.scss']
})
export class PayTransfCourseComponent {
  // comienza sin ser seleccionado osea nula
  transferOption: string | null = null;

  formPay: any
  constructor(private router: Router,
              private fb: FormBuilder) {
    this.formPay = this.fb.group({
      cuit: ['', [Validators.required, Validators.pattern(/^[0-9\-]{13}$/)]],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]{3,}$/)]],
      date: ['', [Validators.required]],
      amount: ['', [Validators.required, Validators.pattern(/^(?:\d{5,6}(?:\.\d{2})?)?$/)]],
      check: ['', [Validators.required]]
    })
  }
  //los get que me traen la info de los inputs para validar los campos del formulario
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
    }else{
      this.router.navigate(['/unsuccessfully']);
    }
  }
  //limpia el formulario
  clearInput(){
    this.formPay.reset()
  }
  // envio los datos delformulario
  sendTransfer() {
    //valido que los campos esten llenos 
    if(this.formPay.valid){
      //envio los datos
      console.log('Datos de la transferencia: ',this.formPay.value)
      // Después de procesar, resetea el formulario
      this.clearInput()
      //depende la opcion elejida va a success o unsuccessfully
      this.validationMock()
    }else{
      alert('llenar los campo')
    }
  }
}
