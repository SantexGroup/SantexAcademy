import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Formations } from 'src/app/core/interfaces/formation.interface';
import { FormationsStatus } from 'src/app/core/interfaces/formationsStatus.interface';
import { FormationsTypes } from 'src/app/core/interfaces/formationsTypes.interface';
import { FormationsStatusService } from 'src/app/core/services/formations-status.service';
import { FormationsTypeService } from 'src/app/core/services/formations-type.service';
import { FormationsService } from 'src/app/core/services/formations.service';


@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  formationForm: FormGroup;

  constructor(
    private _formationsTypesServices: FormationsTypeService,
    private _formationsStatusServices: FormationsStatusService,
    private _formationsServices: FormationsService,
    private fb: FormBuilder
    ) {
      this.formationForm = this.fb.group({
        statusId: '',
        typesId: '',
        title: '',
        institute: '',
        startDate: '',
        endDate: '',
        description: '',
      })
     }

  ngOnInit(): void {

    this.formationsStatusGet();

    this.formationsTypesGet();
  }

  formationsTypesGet(){
    this._formationsTypesServices.getFormationType().subscribe((typesList: FormationsTypes[])=>{
      this.types = typesList;
    });
  }

  types: FormationsTypes[] = [];

  formationsStatusGet(){
    this._formationsStatusServices.getFormationStatus().subscribe((statusList: FormationsStatus[])=>{
      this.status = statusList;
    });
  }

  status: FormationsStatus[] = [];

  formationAdd(){
    const newFormation: Formations = {
      statusId: this.formationForm.get('statusId')?.value,
      typesId: this.formationForm.get('typesId')?.value,
      title: this.formationForm.get('title')?.value,
      institute: this.formationForm.get('institute')?.value,
      startDate: this.formationForm.get('startDate')?.value,
      endDate: this.formationForm.get('endDate')?.value,
      description: this.formationForm.get('description')?.value,
    }

    this._formationsServices.addFormation(newFormation).subscribe((data)=>{
      console.log(data);
    });

    this.formationForm.reset();
  }

  endDateShow():boolean{
    return this.formationForm.get('statusId')?.value !== 1;
  }
}
