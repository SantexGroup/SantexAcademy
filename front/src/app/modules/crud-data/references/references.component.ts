import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Reference } from 'src/app/core/interfaces/reference.interface';
import { ExperiencesService } from 'src/app/core/services/experiences.service';
import { ReferencesService } from 'src/app/core/services/references.service';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

  referenceForm: FormGroup;

  referenceList: Reference[] = [];

  referenceId: number = 0;

  constructor(
    public userData: UserDataService,
    public views: NavBarService,
    private _company: ExperiencesService,
    private fb: FormBuilder,
    private _referenceService: ReferencesService
  ) {
    this.referenceForm = this.fb.group({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
    })
  }

  ngOnInit(): void {

    this.getCompany();

    this.getReference();

  }

  getCompany() {
    const duplicated: string[] = [];
    this._company.getExperience(this.userData.userId).subscribe((experiences) => {
      experiences.map((element) => {
        duplicated.push(element.company)
      });
      const notDuplicated = new Set(duplicated);
      this.userData.companies = Array.from(notDuplicated);
    })
  }

  addReference() {

    const newReference: Reference = {
      name: this.referenceForm.get('name')?.value,
      lastName: this.referenceForm.get('lastName')?.value,
      email: this.referenceForm.get('email')?.value,
      phone: this.referenceForm.get('phone')?.value,
      company: this.referenceForm.get('company')?.value,
      profileId: this.userData.profileId
    }
    this._referenceService.addReference(newReference).subscribe((reference) => {
      this.referenceList.push(reference);
    })

    this.referenceForm.reset();
  }

  getReference() {
    this._referenceService.getReference(this.userData.userId).subscribe((referenceList) => {
      this.referenceList = referenceList;
      console.log(this.referenceList)
    });
  }

  selectedReference(id?: number) {
    const index = this.referenceList.findIndex(reference => reference.id === id)
    const element = this.referenceList[index]

    console.log(element);
    console.log(index);

    this.referenceForm.patchValue({
      name: element.name,
      lastName: element.lastName,
      email: element.email,
      phone: element.phone,
      company: element.company,
      profileId: element.profileId
    });

    this.referenceId = Number(element.id);
    console.log(this.referenceId)
  }

  updateReferece() {

    const updateReference: Reference = {
      name: this.referenceForm.get('name')?.value,
      lastName: this.referenceForm.get('lastName')?.value,
      email: this.referenceForm.get('email')?.value,
      phone: this.referenceForm.get('phone')?.value,
      company: this.referenceForm.get('company')?.value,
    }

    this._referenceService.updateReference(this.referenceId, updateReference).subscribe((referece) => {
      this.getReference()
    });

    this.referenceForm.reset();

    this.views.saveButton = false;
    this.views.plusOne = true;

  }

  deleteReference(id?:number){
    const index = this.referenceList.findIndex(reference => reference.id === id);
    const elementId = Number(this.referenceList[index].id);
    this._referenceService.deleteReference(elementId).subscribe(()=>{
      this.referenceList.splice(index, 1);
    });
  }



}
