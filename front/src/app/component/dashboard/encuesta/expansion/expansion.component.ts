/* import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})
export class ExpansionComponent implements OnInit {
setcheckbox=true;
accordion: any;
toppings: FormGroup;
pasoUno: FormGroup;


  constructor(private fb:FormBuilder) { 
    this.pasoUno= this.fb.group({

      nombre:['', Validators.required],
      email:['', Validators.required],
      edad:['', Validators.required],
      sexo:['', Validators.required],
      conQuien:['', Validators.required],
      comoConocio:['', Validators.required ,{television:false,
        pagina:false,
        radio:false,
        medios:false,
        facebook:false,
        recomendaciones:false,
        otro:"",}]  
    })
    
    
    
    this.toppings= this.fb.group({
      television:false,
      pagina:false,
      radio:false,
      medios:false,
      facebook:false,
      recomendaciones:false,
      otro:"",
    })
  }

  ngOnInit(): void {
  }

 step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  enviar(){
    console.log(this.pasoUno);
    console.log(this.fb.group);
  }

} */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expansion',
  templateUrl: './expansion.component.html',
  styleUrls: ['./expansion.component.css']
})
export class ExpansionComponent implements OnInit {
  setcheckbox = true;
  accordion: any;
  pasoUno: FormGroup;



  constructor(private fb: FormBuilder) {
    this.pasoUno = this.fb.group({
      pregunta1: ['', Validators.required],
      pregunta2: ['', Validators.required],
      pregunta3: ['', Validators.required],
      pregunta4: ['', Validators.required],
      pregunta5: ['', Validators.required],
      pregunta6: ['', Validators.required],
      pregunta7: ['', Validators.required],
      pregunta8: ['', Validators.required],
      pregunta9: this.fb.group({
        television: false,
        pagina: false,
        radio: false,
        medios: false,
        facebook: false,
        recomendaciones: false,
        otro: ''
      })
    });
  }
  
  ngOnInit(): void {}

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


 enviar(){

   const pregunta1= this.pasoUno.value.pregunta1;
   const pregunta2= this.pasoUno.value.pregunta2;
   const pregunta3= this.pasoUno.value.pregunta3;


    console.log(pregunta1);
    console.log(pregunta2);
    console.log(pregunta3);


    console.log(this.pasoUno);
  }

  

}



