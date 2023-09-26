import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Countries } from 'src/app/core/interfaces/country.interface';
import { Marital } from 'src/app/core/interfaces/marital.interface';
import { Optionals } from 'src/app/core/interfaces/optionlas.interface';
import { Sexs } from 'src/app/core/interfaces/sex.interface';
import { CountriesService } from 'src/app/core/services/countries.service';
import { GenderService } from 'src/app/core/services/gender.service';
import { MaritalsService } from 'src/app/core/services/maritals.service';
import { OptionalsService } from 'src/app/core/services/optionals.service';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-optionals',
  templateUrl: './optionals.component.html',
  styleUrls: ['./optionals.component.css'],
})
export class OptionalsComponent implements OnInit {

  optionalsForm: FormGroup;

  optionalId: number = 0;

  constructor(
    private _countriesService: CountriesService,
    private _maritalsService: MaritalsService,
    private _genderServices: GenderService,
    private _optionalsService: OptionalsService,
    private fb: FormBuilder,
    public userData: UserDataService,
    public views: NavBarService,
    public toastr: ToastrService
  ) {
    this.optionalsForm = this.fb.group({
      maritalId: ['', Validators.required],
      sexsId: ['', Validators.required],
      countriesId: ['', Validators.required],
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

  ngOnInit(): void {
    
    this.userData.checkForm = false;

    this.getListCountries();

    this.getListGender();

    this.getListMaritals();

    this.userData.getMyOptionals();

    this.views.changeTitle("Opcionales");
    
    this.views.plusOne = true;

    this.views.saveButton = false;

  }

  //Countries
  getListCountries() {
    this._countriesService.getCountries().subscribe((countriesList: Countries[]) => {
      this.countries = countriesList;
    });
  }

  countries: Countries[] = [];

  //Maritals
  getListMaritals() {
    this._maritalsService.getMaritals().subscribe((maritalsList: Marital[]) => {
      this.marital = maritalsList;
    });
  }

  marital: Marital[] = [];

  //Gender  
  getListGender() {
    this._genderServices.getSexs().subscribe((genderList: Sexs[]) => {
      this.gender = genderList;
    });
  }

  gender: Sexs[] = [];

  postOptionals() {

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
      profileId: this.userData.profileId,
    }

    this._optionalsService.addOptionals(newOptionals).subscribe((optional) => {
      this.userData.optionals.push(optional);
      this.toastr.success('Se agregaron nuevos opcionales', 'OPCIONALES');
    });

    this.optionalsForm.reset();
  }

  getOptional(id?: number) {
    const index = this.userData.optionals.findIndex(option => option.id === id);
    const element = this.userData.optionals[index];

    this.optionalsForm.patchValue({
      maritalId: element.maritalId,
      sexsId: element.sexsId,
      countriesId: element.countriesId,
      profile: element.profile,
      webPage: element.webPage,
      linkedIn: element.linkedIn,
      hobbies: element.hobbies,
      aptitudes: element.aptitudes,
      driverLicense: element.driverLicense,
      aboutMe: element.aboutMe,
      achievements: element.achievements,
      address: element.address,
      zipCode: element.zipCode,
    });

    this.optionalId = Number(element.id);
  }

  updateOptionals() {

    const newDataOptional: Optionals = {
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
      profileId: this.userData.profileId
    }

    this._optionalsService.updateOptionals(this.optionalId, newDataOptional).subscribe(() => {
      this.userData.getMyOptionals();
      this.toastr.success('Se actualizaron los opcionales', 'OPCIONALES');
    });

    this.optionalsForm.reset();

    this.views.saveButton = false;
    this.views.plusOne = true;

  }

  removeOptional(id?: number) {
    const index = this.userData.optionals.findIndex(option => option.id === id)
    const elementId = Number((this.userData.optionals[index]).id)
    this._optionalsService.deleteOptional(elementId).subscribe(() => {
      this.userData.optionals.splice(index, 1);
      this.toastr.error('Se eliminaron los opcionales');
    });
  }
}