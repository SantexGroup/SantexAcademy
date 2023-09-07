import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userData: UserDataService
  ) { }

  ngOnInit() {
    console.log("desde personal")
    /* this.route.paramMap.subscribe(params => {
      if (params.has('id')) {
        console.log(params.get('id'));
      }      
    }) */
    console.log(this.userData.userId) 
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
