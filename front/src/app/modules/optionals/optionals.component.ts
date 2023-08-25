import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Countries } from 'src/app/interfaces/country.interface';
import { Marital } from 'src/app/interfaces/marital.interface';
import { Sexs } from 'src/app/interfaces/sex.interface';

@Component({
  selector: 'app-optionals',
  templateUrl: './optionals.component.html',
  styleUrls: ['./optionals.component.css'],
})
export class OptionalsComponent implements OnInit {

  countries: Countries[] = [];

  sexs: Sexs[] = [];

  marital: Marital[] = [];

  constructor(private http: HttpClient) { 
  }

  ngOnInit(): void {
    this.http.get<Countries[]>('http://localhost:3000/countries/all').subscribe((countriesList: Countries[]) => {
      this.countries = countriesList;
    });

    this.http.get<Sexs[]>('http://localhost:3000/gender/all').subscribe((genderList: Sexs[]) => {
      this.sexs = genderList;
    });

    this.http.get<Marital[]>('http://localhost:3000/marital/all').subscribe((maritalList: Marital[]) => {
      this.marital = maritalList;
    });
  }

}
