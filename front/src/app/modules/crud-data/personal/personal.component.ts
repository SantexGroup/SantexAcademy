import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log("desde personal")
    this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        console.log(params.get('id'));
      }      
    })
  }


  // * Forumulario de datos personales
  personalForm = this.fb.group({ 
    firstName: [''],
    lastName: [''],
    email: [''],
    phone: ['', [Validators.maxLength(10)]],
    bornDate: [''],
    pictureLink: [''],
  })
}
