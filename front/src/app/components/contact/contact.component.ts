import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  isSending: boolean = false;

  constructor(private fb: FormBuilder) {}

  validateEmailDomain(control: FormControl) {
    const email = control.value.toLowerCase();
    const allowedDomains = [
      'gmail.com',
      'outlook.com',
      'hotmail.com',
      'yahoo.com',
    ];
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

    if (!emailRegex.test(email)) {
      return { invalidEmail: true };
    }

    if (email) {
      const domain = email.split('@')[1];

      if (!allowedDomains.includes(domain)) {
        return { invalidDomain: true };
      }
    }

    return null;
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    this.isSending = true;
   
    if(this.myForm.valid) {

      emailjs
      .sendForm(
        'service_y1qagcg',
        'incubadora_noc',
        e.target as HTMLFormElement,
        '9zRDvuh1b1V5__zVn',
      )
      .then(
        (result: EmailJSResponseStatus) => {
          alert("Formulario enviado correctamente");
          this.isSending = false;
          this.onReset();
        },
        (error) => {
          this.isSending = false;
          alert("Error al enviar el formulario");
        }
      );

    } else {

      alert('Por favor completa el formulario correctamente')

    }
   
  }

  myForm = this.fb.group({
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required, this.validateEmailDomain]],
    message: ['', [Validators.required]],
  });

  get fullName() {
    return this.myForm.get('fullName');
  }

  get email() {
    return this.myForm.get('email');
  }

  get message() {
    return this.myForm.get('message');
  }

  onReset() {
    this.myForm.reset();
  }

}
