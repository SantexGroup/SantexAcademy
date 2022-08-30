import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-dog',
  templateUrl: './new-dog-page.component.html',
  styleUrls: ['./new-dog-page.component.scss']
})
export class NewDogPageComponent {
  public form = this.formBuilder.group({});
  public razas = [
    {
        id: 1, nombre: 'Chiguagua'
    },
    {
        id: 2, nombre: 'Caniche'
    }
  ];

  constructor(private formBuilder: UntypedFormBuilder, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new UntypedFormControl(null, Validators.compose([Validators.required])),
      birthDate: new UntypedFormControl(
        null,
        Validators.compose([Validators.required])
      ),
      raza: new UntypedFormControl(
        null,
        Validators.compose([Validators.required])
      ),
    });
  }

  onSubmit() {
    if (this.form.valid) {
        const value = this.form.value;
        value.birthDate = this.datePipe.transform(value.birthDate, 'dd-MM-yyyy HH:mm');
    }
  }
}
