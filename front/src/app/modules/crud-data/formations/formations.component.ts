import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Formations } from 'src/app/core/interfaces/formation.interface';
import { FormationsStatus } from 'src/app/core/interfaces/formationsStatus.interface';
import { FormationsTypes } from 'src/app/core/interfaces/formationsTypes.interface';
import { FormationsStatusService } from 'src/app/core/services/formations-status.service';
import { FormationsTypeService } from 'src/app/core/services/formations-type.service';
import { FormationsService } from 'src/app/core/services/formations.service';
import { NavBarService } from 'src/app/core/services/toolServices/nav-bar.service';
import { UserDataService } from 'src/app/core/services/toolServices/userData.service';


@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {
  listFormation: Formations[] = []  
  formationForm: FormGroup;
  editedFormation: Formations | null = null;

  constructor(
    private _formationsTypesServices: FormationsTypeService,
    private _formationsStatusServices: FormationsStatusService,
    private _formationsServices: FormationsService,    
    public views: NavBarService,
    private fb: FormBuilder,
    private userData: UserDataService
    ) {
      this.formationForm = this.fb.group({
        statusId: '',
        typesId: '',
        title: '',
        institute: '',
        startDate: '',
        endDate: null,
        description: '',
      })      
     }

  ngOnInit(): void {

    this.getListFormations();
    
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
      profileId: this.userData.profileId
    }
    console.log(newFormation);

    this._formationsServices.addFormation(newFormation).subscribe((formation)=>{
      this.listFormation.push(formation);
    });    
    this.formationForm.reset();
  
  }

  endDateShow():boolean{
    return this.formationForm.get('statusId')?.value !== 1;
  }

  getListFormations(){
    this._formationsServices.getFormationByUser(this.userData.userId).subscribe((data) => {      
      this.listFormation = data;
    } )
  }

  deleteFormation(id: number) {
    this._formationsServices.deleteFormation(id).subscribe(() =>{
      this.getListFormations()
    })
  }
  editFormation(formation: Formations) {
    this.editedFormation = { ...formation };
    
    
    this.formationForm.patchValue({
      statusId: formation.statusId,
      typesId: formation.typesId,
      title: formation.title,
      institute: formation.institute,
      startDate: formation.startDate,
      endDate: formation.endDate,
      description: formation.description,
    });
  }
 
  
  
   // Función para guardar los cambios realizados en el formulario de edición
   saveFormation() {
    if (this.editedFormation) {
      const updatedFormation: Formations = this.formationForm.value;
      updatedFormation.id = this.editedFormation.id;

      this._formationsServices.updateFormation(updatedFormation).subscribe(() => {
        console.log('Formación actualizada');        
        this.getListFormations();
    });

      // this.editedFormation = null; // Restablecer la formación editada
      this.formationForm.reset(); // Restablecer el formulario
    
    }   
  }
}
