import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Countries } from 'src/app/interfaces/country.interface';
import { Marital } from 'src/app/interfaces/marital.interface';
import { Optionals } from 'src/app/interfaces/optionlas.interface';
import { Sexs } from 'src/app/interfaces/sex.interface';
import { CountriesService } from 'src/app/services/countries.service';
import { GenderService } from 'src/app/services/gender.service';
import { MaritalsService } from 'src/app/services/maritals.service';
import { OptionalsService } from 'src/app/services/optionals.service';

@Component({
  selector: 'app-optionals',
  templateUrl: './optionals.component.html',
  styleUrls: ['./optionals.component.css'],
})
export class OptionalsComponent implements OnInit {

  ngOnInit(): void {

    this.getListCountries();

    this.getListGender();

    this.getListMaritals();

  }

  optionalsForm: FormGroup;

  constructor(
    private _countriesService: CountriesService,
    private _maritalsService: MaritalsService,
    private _genderServices: GenderService,
    private _optionalsService: OptionalsService,
    private fb: FormBuilder
    ) {
      this.optionalsForm = this.fb.group({
        maritalId: [''],
        sexsId: [''],
        countriesId: [''],
        profile: [''],
        webPage: [''],
        linkedIn: [''],
        hobbies: [''],
        aptitudes: [''],
        driverLicense: [''],
        aboutMe: [''],
        achievements: [''],
        address: [''],
        zipCode: [''],
      });
    }

  //Countries
  getListCountries(){
    this._countriesService.getCountries().subscribe((countriesList: Countries[])=>{
      this.countries = countriesList;
    });
  }
  
  countries: Countries[] = [];

  //Maritals
  getListMaritals(){
    this._maritalsService.getMaritals().subscribe((maritalsList: Marital[])=>{
      this.marital= maritalsList;
    });
  }

  marital: Marital[] = [];

  //Gender  
  getListGender(){
    this._genderServices.getSexs().subscribe((genderList: Sexs[])=>{
      this.gender  = genderList ;
    });
  }

  gender: Sexs[] = [];

  postOptionals(){
    const newOptionals: Optionals = {
      maritalId: this.optionalsForm.get('maritalId')?.value,
      sexsId: this.optionalsForm.get('sexsId')?.value,
      countriesId: this.optionalsForm.get('countriesId')?.value,
      profile: this.optionalsForm.get('profile')?.value,
      webPage: this.optionalsForm.get('webPage')?.value,
      linkedIn: this.optionalsForm.get('linkedIn')?.value,
      hobbies: this.optionalsForm.get('hobbies')?.value,
      aptitudes: this.optionalsForm.get('aptitudes')?.value,
      driverLicense: this.optionalsForm.get('driverLicense')?.value,
      aboutMe: this.optionalsForm.get('aboutMe')?.value,
      achievements: this.optionalsForm.get('achievements')?.value,
      address: this.optionalsForm.get('address')?.value,
      zipCode: this.optionalsForm.get('zipCode')?.value,
    }

    this._optionalsService.addOptionals(newOptionals).subscribe((data) => {
      console.log(data);
    });
  }
}