
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-form-inscr-courses',
  templateUrl: './form-inscr-courses.component.html',
  styleUrls: ['./form-inscr-courses.component.scss']
})
export class FormInscrCoursesComponent implements OnInit{

  nodes: any[] = [
    {
      label: 'Mañana',
      value: 'manana',
      leaf: true
    },
    {
      label: 'Tarde',
      value: 'tarde',
      leaf: true
    }
  ];

  recordForm: any 

  constructor(public courseService: CoursesService, 
              private activateRoute: ActivatedRoute, 
              private fb: FormBuilder){
      
    this.recordForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['',[Validators.required, Validators.minLength(3)]],
        idCard: ['',[Validators.required, Validators.pattern(/^[0-9]{8}$/), Validators.minLength(8), Validators.maxLength(8)]],
        email: ['',[Validators.required, Validators.email, this.validateEmailDomain]],
        phone: ['',[Validators.required, this.validateNumberPhone]],
        date: ['',[Validators.required]],
        schedule: ['', Validators.required]
    })
  }
  //para agregar el curso elejido
  subscription: Subscription | null = null;
  ngOnInit(): void {
       const id = this.activateRoute.snapshot.params["id"]
    this.subscription = this.courseService.getCoursesDetail(id).subscribe(
      (response) => {
        this.courseService.courses = response
        console.log("Esta es la respuesta ", response)
        
      }, 
      (error) => {
        console.error(error)
      }
    )
  }

  ngOnDestroy() {

    if(this.subscription) {

      this.subscription.unsubscribe();

    }

  }
  //valido que despues del @ cumpla con el dominio de mail conocido o personalizado y no cualquier dato
  validateEmailDomain(control: FormControl): { [key: string]: any } | null {
    const email = control.value;
    const emailPattern = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const allowedDomains = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com'];
    if (email) {
      const parts = email.split('@');
      if (parts.length === 2) {
        const domain = parts[1];
        if (!allowedDomains.includes(domain) && !emailPattern.test(domain)) {
          return { invalidDomain: true };
        }
      }
    }
    return null;
  }

  // valido que el telefono cumpla con caracteristicas pais, provincia, ciudad
  validateNumberPhone(control: FormControl) {
    const phonePattern = /^\d{2}\s9\s\d{3}\s\d{3}-\d{4}$/; // Aquí puedes definir tu patrón de número telefónico
    const isValid = phonePattern.test(control.value);
    if(control.value === '' || !isValid){
      return { invalidPhone: true }
    }
    // return isValid ? null : { invalidPhone: true };
    return null
  }


  get firstName(){
    return this.recordForm.get('firstName')
  }

  get lastName(){
    return this.recordForm.get('lastName')

  }
  get idCard(){
    return this.recordForm.get('idCard')
  }
  get email(){
    return this.recordForm.get('email')
  }
  get phone(){
    return this.recordForm.get('phone')
  }
  get date(){
    return this.recordForm.get('date')
  }
  get schedule(){
    return this.recordForm.get('schedule')
  }

  guardar(){
    console.log('Formulario', this.recordForm.value)
  }

  onSubmit(){
    console.log('onSubmit() ejecutada')
    console.log('Formulario válido:', this.recordForm.valid);
    console.log('Formulario:', this.recordForm.value);
    if(this.recordForm.valid){
      console.log(this.recordForm.value)
    }else{
      alert('llenar los campo')
    }
  }

  limpiar(){
    this.recordForm.reset()
  }

}
