import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/app/interfaces/country.interface';
import { Marital } from 'src/app/interfaces/marital.interface';
import { Sexs } from 'src/app/interfaces/sex.interface';
import { CountriesService } from 'src/app/services/countries.service';
import { GenderService } from 'src/app/services/gender.service';
import { MaritalsService } from 'src/app/services/maritals.service';

@Component({
  selector: 'app-optionals',
  templateUrl: './optionals.component.html',
  styleUrls: ['./optionals.component.css'],
})
export class OptionalsComponent implements OnInit {

  constructor(
    private _countriesService: CountriesService,
    private _maritalsService: MaritalsService,
    private _genderServices: GenderService
    ) {}

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

 
  ngOnInit(): void {
    this.getListCountries();

    this.getListGender();

    this.getListMaritals();
  }
}
