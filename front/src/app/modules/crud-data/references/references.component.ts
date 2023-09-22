import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Reference } from 'src/app/core/interfaces/reference.interface';
import { ExperiencesService } from 'src/app/core/services/experiences.service';
import { ReferencesService } from 'src/app/core/services/references.service';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';
import { ToastrService } from 'ngx-toastr';
import { FormChangesService } from 'src/app/core/services/toolServices/form-changes.service';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent implements OnInit {

  referenceForm: FormGroup;

  referenceId: number = 0;

  constructor(
    private _company: ExperiencesService,
    private fb: FormBuilder,
    private _referenceService: ReferencesService,
    private _formChangeService: FormChangesService,
    public userData: UserDataService,
    public views: NavBarService,
    public toastr :ToastrService 
  ) {
    this.referenceForm = this.fb.group({
      name: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
    });

    this._formChangeService.originalValues = this.referenceForm.value;
this._formChangeService.checkFormChanges(this.referenceForm);
  }

  ngOnInit(): void {

    this.views.title = "Referencias";

    this.getCompany();

    this.userData.getReference();

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
      this.userData.references.push(reference);
      this.toastr.success('Se agrego un nueva referencia', 'REFERENCIA');
    })

    this.referenceForm.reset();
  }

  selectedReference(id?: number) {
    const index = this.userData.references.findIndex(reference => reference.id === id)
    const element = this.userData.references[index]


    this.referenceForm.patchValue({
      name: element.name,
      lastName: element.lastName,
      email: element.email,
      phone: element.phone,
      company: element.company,
      profileId: element.profileId
    });

    this.referenceId = Number(element.id);
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
      this.userData.getReference()
      this.toastr.success('Se actualizo la referencia', 'REFERENCIA');
    });

    this.referenceForm.reset();

    this.views.saveButton = false;
    this.views.plusOne = true;

  }

  deleteReference(id?:number){
    const index = this.userData.references.findIndex(reference => reference.id === id);
    const elementId = Number(this.userData.references[index].id);
    this._referenceService.deleteReference(elementId).subscribe(()=>{
      this.userData.references.splice(index, 1);
      this.toastr.error('Se elimino la referencia');
    });

    this.referenceForm.reset();
  }
}
