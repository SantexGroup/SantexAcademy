import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Countries } from 'src/app/interfaces/country.interface';
import { Experience } from 'src/app/interfaces/experience.interface';
import { ExperienceStatus } from 'src/app/interfaces/experienceStatus.interface';
import { ExperienceType } from 'src/app/interfaces/experienceType.interface';
import { CountriesService } from 'src/app/services/countries.service';
import { ExperiencesStatusService } from 'src/app/services/experiences-status.service';
import { ExperiencesTypeService } from 'src/app/services/experiences-type.service';
import { ExperiencesService } from 'src/app/services/experiences.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css'],
})
export class ExperiencesComponent implements OnInit {

  experienceForm: FormGroup;

  constructor(
    private _experienceTypeServices: ExperiencesTypeService,
    private _experienceStatusServices: ExperiencesStatusService,
    private _countriesService: CountriesService,
    private _experiencesService: ExperiencesService,
    private fb: FormBuilder,
  ) {
    this.experienceForm = this.fb.group({
      description: '',
      company: '',
      position: '',
      typesId: '',
      statusId: '',
      countriesId: '',
      startDate: '',
      endDate: '',
    })
  }

  ngOnInit(): void {

    this.getTypes();

    this.getStatus();

    this.getCountries();

  }

  endDateShow():boolean{
    return this.experienceForm.get('statusId')?.value !== 1;
  }

  addExperience(){
    const newExperience: Experience = {
      description: this.experienceForm.get('description')?.value,
      company: this.experienceForm.get('company')?.value,
      position: this.experienceForm.get('position')?.value,
      typesId: this.experienceForm.get('typesId')?.value,
      statusId: this.experienceForm.get('statusId')?.value,
      countriesId: this.experienceForm.get('countriesId')?.value,
      startDate: this.experienceForm.get('startDate')?.value,
      endDate: this.experienceForm.get('endDate')?.value,
    }

    this._experiencesService.addExperience(newExperience).subscribe((data) => {
      console.log(data);
    });

    this.experienceForm.reset();
  }
  
  //Experiences Types
  getTypes() {
    this._experienceTypeServices.getExperienceType().subscribe((typesList: ExperienceType[]) => {
      this.types = typesList;
    });
  }

  types: ExperienceType[] = [];

  //Experiences Status
  getStatus() {
    this._experienceStatusServices.getExperieceStatus().subscribe((statusList: ExperienceStatus[]) => {
      this.status = statusList;
    })
  }

  status: ExperienceStatus[] = [];

  getCountries() {
    this._countriesService.getCountries().subscribe((countriesList: Countries[]) => {
      this.countries = countriesList;
    });
  }

  countries: Countries[] = [];

}
