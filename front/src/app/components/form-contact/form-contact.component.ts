import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GmailService } from 'src/app/services/gmail.service';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css'],
})
export class FormContactComponent {
  dataForm: FormGroup;
  onModalStatus: boolean = false;
  statusModal: string = '';
  messageModal: string = '';
  constructor(private fb: FormBuilder, private gmailServices: GmailService) {
    this.dataForm = this.fb.group({
      full_name: ['', [Validators.required]],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  sendEmail() {
    if (this.dataForm.valid) {
      this.gmailServices.sendEmail(this.dataForm.value).subscribe({
        next: (res) => {
          this.onModalStatus = true;
          this.statusModal = 'success';
          this.messageModal =
            '¡Mensaje enviado con éxito! Agradecemos tu contacto y te responderemos pronto.';
          this.dataForm.reset();
          setTimeout(() => {
            this.onModalStatus = false;
          }, 2000);
        },

        error: (err) => {
          this.onModalStatus = true;
          this.statusModal = 'failed';
          this.messageModal =
            'Lo sentimos, ha ocurrido un error al enviar tu mensaje. Por favor, inténtalo nuevamente más tarde.';
        },
      });
    }
  }

  closeModal() {
    this.onModalStatus = false;
  }
}
