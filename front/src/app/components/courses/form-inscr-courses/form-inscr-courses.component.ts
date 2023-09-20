
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-form-inscr-courses',
  templateUrl: './form-inscr-courses.component.html',
  styleUrls: ['./form-inscr-courses.component.scss']
})
export class FormInscrCoursesComponent implements OnInit{
  //para que eliga en el option
  nodes: any[] = [
    {
      label: 'Mañana',
      value: 'manana',
      leaf: true
    }
  ];

  recordForm: any 

  constructor(public courseService: CoursesService, 
              private activateRoute: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder){
      
    this.recordForm = this.fb.group({
        firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]{3,}$/)]],
        lastName: ['',[Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z\s]{3,}$/)]],
        idCard: ['',[Validators.required, Validators.pattern(/^[0-9]{8}$/)]],
        email: ['',[Validators.required, Validators.email, this.validateEmailDomain]],
        phone: ['',[Validators.required, this.validateNumberPhone]],
        date: ['',[Validators.required]],
        schedule: ['', Validators.required]
    })
  }
  //valido que despues del @ cumpla con el dominio de mail conocido o personalizado y no cualquier dato
  validateEmailDomain(control: FormControl): { [key: string]: any } | null {
    const email = control.value;
    const emailPattern = /^[a-zA-Z0-9_-]+@/;
    const allowedDomains = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', '.com.ar', 'ar'];
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

    const phonePattern1 = /^\d{2}\s9\s\d{3}\s\d{3}-\d{4}$/;
    const phonePattern2 = /^[0-9 -]+$/;
    const isValid1 = phonePattern1.test(control.value);
    const isValid2 = phonePattern2.test(control.value);
    if(control.value === '' || !isValid1 || !isValid2) {
      return { invalidPhone: true }
    }
    return null
  }
//los get que me traen la info de los inputs para validar los campos del formulario
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
  //limpia el formulario
  clearInput(){
    this.recordForm.reset();
  }
  //envio los datos delformulario
  onSubmit(){
    if(this.recordForm.valid){
      console.log('Formulario con datos',this.recordForm.value)
      this.router.navigate(['/pay-transf-course'])
      // Después de procesar, resetea el formulario
      this.clearInput()
      //return this.recordForm.value
    }else{
      alert('Debe completar los campos')
    }
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
        this.router.navigate(['/error404']);
      }
    )
  }
  
    ngOnDestroy() {
  
      if(this.subscription) {
  
        this.subscription.unsubscribe();
  
      }
  
    }

}
